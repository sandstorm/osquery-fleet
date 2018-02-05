<?php

namespace Sandstorm\OsqueryFleet\Core\Domain\Repository;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Persistence\Doctrine\Repository;
use Neos\Flow\Utility\Algorithms;
use Sandstorm\OsqueryFleet\Core\Domain\Model\Node;
use Sandstorm\OsqueryFleet\Core\Domain\Model\SnapshotLog;
use Sandstorm\OsqueryFleet\Core\Domain\Model\StatusLog;

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
    public function logLine(SnapshotLog $snapshotLog, $nodeIdentifier)
    {
        $table = $this->getClassMetadata()->getTableName();

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
                'persistenceIdentifier' => Algorithms::generateUUID(),
                'nodeIdentifier' => $nodeIdentifier,
                'timestamp' => $snapshotLog->timestamp->format('U'),
                'queryOrQueryPackIdentifier' => $snapshotLog->queryOrQueryPackIdentifier,
                'snapshot' => json_encode($snapshotLog->snapshot)
            ]
        );
    }

    public function findMostRecentResultForEachNode(string $queryIdentifier)
    {
        
    }
}
