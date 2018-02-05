<?php

namespace Sandstorm\OsqueryFleet\Core\Domain\Repository;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Persistence\Doctrine\Repository;
use Neos\Flow\Persistence\QueryInterface;
use Neos\Flow\Utility\Algorithms;
use Sandstorm\OsqueryFleet\Core\Domain\Model\Node;
use Sandstorm\OsqueryFleet\Core\Domain\Model\StatusLog;

/**
 * @Flow\Scope("singleton")
 */
class StatusLogRepository extends Repository
{
    /**
     * @var array
     */
    protected $defaultOrderings = [
        'timestamp' => QueryInterface::ORDER_DESCENDING
    ];

    /**
     * @param StatusLog $statusLog
     * @param string $nodeIdentifier
     * @throws \Doctrine\DBAL\DBALException
     */
    public function logLine(StatusLog $statusLog, $nodeIdentifier)
    {
        $table = $this->getClassMetadata()->getTableName();

        $this->getEntityManager()->getConnection()->executeUpdate(
            "INSERT INTO $table (
                persistence_object_identifier,
                node,
                timestamp,
                filename,
                line,
                severity,
                message
            ) VALUES (
                :persistenceIdentifier,
                :nodeIdentifier,
                to_timestamp(:timestamp),
                :filename,
                :line,
                :severity,
                :message
            )",
            [
                'persistenceIdentifier' => Algorithms::generateUUID(),
                'nodeIdentifier' => $nodeIdentifier,
                'timestamp' => $statusLog->timestamp->format('U'),
                'filename' => $statusLog->filename,
                'line' => $statusLog->line,
                'severity' => $statusLog->severity,
                'message' => $statusLog->message,
            ]
        );
    }
}
