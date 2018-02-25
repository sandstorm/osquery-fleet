<?php

namespace Sandstorm\OsqueryFleet\Core\Domain\Repository;

use Doctrine\ORM\Query\ResultSetMappingBuilder;
use Neos\Flow\Annotations as Flow;
use Neos\Flow\Persistence\Doctrine\Repository;
use Neos\Flow\Utility\Algorithms;
use Sandstorm\OsqueryFleet\Core\Domain\Model\Node;
use Sandstorm\OsqueryFleet\Core\Domain\Model\SnapshotLog;
use Sandstorm\OsqueryFleet\Core\Domain\Model\StatusLog;
use Sandstorm\OsqueryFleet\Core\Domain\ValueObject\SnapshotLogIdentifier;

/**
 * @Flow\Scope("singleton")
 */
class SnapshotLogRepository extends Repository
{
    /**
     * @param StatusLog $snapshotLog
     * @param string $nodeIdentifier
     * @throws \Doctrine\DBAL\DBALException
     */
    public function logLine(SnapshotLog $snapshotLog, $nodeIdentifier) : SnapshotLogIdentifier
    {
        $table = $this->getClassMetadata()->getTableName();

        $snapshotLogIdentifier = new SnapshotLogIdentifier();

        $this->getEntityManager()->getConnection()->executeUpdate(
            "INSERT INTO $table (
                persistence_object_identifier,
                node,
                timestamp,
                queryorquerypackidentifier,
                snapshot
            ) VALUES (
                :persistenceIdentifier,
                :nodeIdentifier,
                to_timestamp(:timestamp),
                :queryOrQueryPackIdentifier,
                :snapshot
            )",
            [
                'persistenceIdentifier' => $snapshotLogIdentifier,
                'nodeIdentifier' => $nodeIdentifier,
                'timestamp' => $snapshotLog->timestamp->format('U'),
                'queryOrQueryPackIdentifier' => $snapshotLog->queryOrQueryPackIdentifier,
                'snapshot' => json_encode($snapshotLog->snapshot)
            ]
        );

        return $snapshotLogIdentifier;
    }

    public function findMostRecentResultForEachNode(string $queryIdentifier)
    {
        $nodeTable = $this->getEntityManager()->getClassMetadata(Node::class)->getTableName();
        $snapshotLogTable = $this->getClassMetadata()->getTableName();

        $rsmb = new ResultSetMappingBuilder($this->getEntityManager());
        $rsmb->addRootEntityFromClassMetadata(SnapshotLog::class, 'snapshotLog');

        $query = $this->getEntityManager()->createNativeQuery(
            "
            SELECT snapshotLog.*
            FROM $nodeTable node
            LEFT JOIN $snapshotLogTable AS snapshotLog ON snapshotLog.node = node.persistence_object_identifier
            WHERE
                snapshotLog.persistence_object_identifier = (
                    SELECT persistence_object_identifier
                    FROM $snapshotLogTable
                    WHERE node = node.persistence_object_identifier
                    ORDER BY timestamp DESC LIMIT 1
                )
                AND snapshotLog.queryorquerypackidentifier = :queryOrQueryPackIdentifier
            ", $rsmb);
        $query->setParameter('queryOrQueryPackIdentifier', $queryIdentifier);
        return $query->getResult();
    }

    public function findRecentResultsForSingleNode(string $queryIdentifier, $nodeHostIdentifier)
    {
        
    }
}
