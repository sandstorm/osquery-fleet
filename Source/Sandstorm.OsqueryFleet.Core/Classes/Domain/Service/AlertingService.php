<?php

namespace Sandstorm\OsqueryFleet\Core\Domain\Service;

use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\DBAL\Connection;
use Doctrine\DBAL\DriverManager;
use Neos\Flow\Annotations as Flow;
use Neos\Utility\Arrays;
use Sandstorm\OsqueryFleet\Core\Domain\Model\Query;
use Sandstorm\OsqueryFleet\Core\Domain\Model\SnapshotLog;
use Sandstorm\OsqueryFleet\Core\Domain\Repository\AlertingRepository;
use Sandstorm\OsqueryFleet\Core\Domain\Repository\SnapshotLogRepository;
use Sandstorm\OsqueryFleet\Core\Domain\ValueObject\SnapshotLogIdentifier;
use Sandstorm\OsqueryFleet\Core\Exception\AlertingPermissionsIncorrectException;

/**
 * @Flow\Scope("singleton")
 */
class AlertingService
{

    /**
     * @Flow\InjectConfiguration(package="Neos.Flow", path="persistence.backendOptions")
     * @var array
     */
    protected $flowPersistenceBackendOptions;

    /**
     * @Flow\InjectConfiguration(path="alerting.rulePersistenceBackendOptions")
     * @var array
     */
    protected $alertingRulePersistenceBackendOptions;

    /**
     * @Flow\Inject
     * @var ObjectManager
     */
    protected $entityManager;

    /**
     * @Flow\Inject
     * @var SnapshotLogRepository
     */
    protected $snapshotLogRepository;

    protected function getAlertingRuleConnection(): Connection
    {
        $config = new \Doctrine\DBAL\Configuration();
        $connectionParams = Arrays::arrayMergeRecursiveOverrule($this->flowPersistenceBackendOptions, $this->alertingRulePersistenceBackendOptions);
        return DriverManager::getConnection($connectionParams, $config);
    }

    public function setup()
    {
        $this->ensureDifferentAlertingUserIsConfigured();
        $this->ensureStatusLogTableCanBeReadFrom();
        $this->ensureNoOtherTablesExceptStatusLogTableHavePermissions();
    }

    private function ensureDifferentAlertingUserIsConfigured()
    {
        $connectionParams = Arrays::arrayMergeRecursiveOverrule($this->flowPersistenceBackendOptions, $this->alertingRulePersistenceBackendOptions);
        if ($connectionParams['user'] === $this->flowPersistenceBackendOptions['user']) {
            throw new AlertingPermissionsIncorrectException('The alerting user at Sandstorm.OsqueryFleet.Core.alerting.rulePersistenceBackendOptions must be configured and different than the normal user.
                
                To create the alerting user, run:
                
                CREATE ROLE [alerting-user-name] LOGIN PASSWORD \'[alerting-password]\';
                GRANT SELECT on sandstorm_osqueryfleet_core_domain_model_snapshotlog to [alerting-user-name];
                
                NOTE: the alerting user is ONLY allowed to read a single table; and this is enforced (as the user directly enters some part of the SQL query!)
            ');
        }
    }

    private function ensureStatusLogTableCanBeReadFrom()
    {
        $statusLogTable = $this->entityManager->getClassMetadata(SnapshotLog::class)->getTableName();

        $result = $this->getAlertingRuleConnection()->executeQuery('
            SELECT *
            FROM information_schema.table_privileges
            WHERE
                (table_name = :statusLogTable AND privilege_type = \'SELECT\')
                AND NOT table_schema IN (\'information_schema\', \'pg_catalog\')
        ', [
            'statusLogTable' => $statusLogTable
        ]);

        $results = $result->fetchAll();
        if (count($results) === 0) {
            throw new AlertingPermissionsIncorrectException('The table ' . $statusLogTable . ' can not be read for the alerting user. Add permissions using "GRANT SELECT on sandstorm_osqueryfleet_core_domain_model_snapshotlog to [alerting-user-name];".');
        }
    }

    private function ensureNoOtherTablesExceptStatusLogTableHavePermissions()
    {
        $statusLogTable = $this->entityManager->getClassMetadata(SnapshotLog::class)->getTableName();

        $result = $this->getAlertingRuleConnection()->executeQuery('
            SELECT *
            FROM information_schema.table_privileges
            WHERE
                NOT (table_name = :statusLogTable AND privilege_type = \'SELECT\')
                AND NOT table_schema IN (\'information_schema\', \'pg_catalog\')
        ', [
            'statusLogTable' => $statusLogTable
        ]);

        $results = $result->fetchAll();
        if (count($results) > 0) {
            throw new AlertingPermissionsIncorrectException('Too many permissions for status log user; revoke the following permissions: ' . json_encode($results));
        }
    }

    public function evaluateAlert(SnapshotLogIdentifier $snapshotLogIdentifier)
    {
        // 1. Find Alert SQL where part
        $snapshotLogTable = $this->entityManager->getClassMetadata(SnapshotLog::class)->getTableName();
        $queryTable = $this->entityManager->getClassMetadata(Query::class)->getTableName();

        $alertSqlWherePart = $this->entityManager->getConnection()->fetchColumn("
            SELECT alertsqlwherepart
            FROM $queryTable query
            JOIN $snapshotLogTable snapshotLog ON query.identifier = snapshotLog.queryorquerypackidentifier
            WHERE snapshotLog.persistence_object_identifier = :snapshotLogIdentifier  
            ",
            [
                'snapshotLogIdentifier' => $snapshotLogIdentifier
            ]
        );

        // 2. use RESTRICTED connection and evaluate query
        // bool_or(row->>'timestamp' like '%Tuew%')
        // TODO: explain possible SQL injections here (which are done on purpose ;) )
        $alertTriggered = false;
        if (!empty($alertSqlWherePart)) {
            $alertingRuleConnection = $this->getAlertingRuleConnection();
            $alertTriggered = $alertingRuleConnection->fetchColumn("
                SELECT $alertSqlWherePart from $snapshotLogTable snapshotLog,
                LATERAL jsonb_array_elements(snapshotLog.snapshot) as elements(row)
                WHERE snapshotLog.persistence_object_identifier = :snapshotLogIdentifier
                GROUP BY snapshotLog.persistence_object_identifier;        
            ", [
                'snapshotLogIdentifier' => $snapshotLogIdentifier
            ]);
            $alertingRuleConnection->close();
        }

        if ($alertTriggered) {
            $client = new CustomRavenClient('https://29ddfeb952fb46919a3b79cdb2538eb6:920cf56e920347019260b10b704f1ec6@sentry.cloud.sandstorm.de/4');
            $client->captureMessage('Alerts triggered for query "FOO" on node "NODE NAME".', array('log'), array(
                'extra' => array(
                    'foo' => 'bar',
                ),
                'logger' => 'snapshotLogAlert'
            ));
        }

        $this->entityManager->getConnection()->executeUpdate("
            UPDATE $snapshotLogTable
            SET alert=:alert
            WHERE persistence_object_identifier = :snapshotLogIdentifier
        ", [
            'alert' => boolval($alertTriggered),
            'snapshotLogIdentifier' => $snapshotLogIdentifier
        ], [
            'alert' => \PDO::PARAM_BOOL
        ]);
    }
}
