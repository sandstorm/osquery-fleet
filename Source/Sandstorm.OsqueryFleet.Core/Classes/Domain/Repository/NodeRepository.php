<?php

namespace Sandstorm\OsqueryFleet\Core\Domain\Repository;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Persistence\Doctrine\Repository;
use Neos\Flow\Utility\Algorithms;

/**
 * @Flow\Scope("singleton")
 */
class NodeRepository extends Repository
{
    /**
     * @param $hostIdentifier
     * @param $newNodeKey
     * @throws \Doctrine\DBAL\DBALException
     */
    public function createOrUpdateNodeDuringEnrollment($hostIdentifier, $newNodeKey)
    {
        $table = $this->getClassMetadata()->getTableName();
        $this->getEntityManager()->getConnection()->executeUpdate(
            'INSERT INTO ' . $table . ' (
                persistence_object_identifier,
                hostidentifier,
                nodekey,
                firstenrollmenttimestamp,
                mostrecentenrollmenttimestamp
            ) VALUES (
                :persistenceIdentifier,
                :hostIdentifier,
                :nodeKey,
                now(),
                now()
            )
            ON CONFLICT (hostidentifier) DO
                UPDATE SET
                    nodekey = :nodeKey,
                    mostrecentenrollmenttimestamp = now();',
            [
                'persistenceIdentifier' => Algorithms::generateUUID(),
                'hostIdentifier' => $hostIdentifier,
                'nodeKey' => $newNodeKey
            ]
        );
    }

    public function isNodeKeyValid($node_key)
    {
        return $this->findNodeIdentifierForNodeKey($node_key) !== null;
    }

    public function findNodeIdentifierForNodeKey($nodeKey): ?string
    {
        $nodeTable = $this->getClassMetadata()->getTableName();
        $result = $this->getEntityManager()->getConnection()->fetchColumn(
            "SELECT persistence_object_identifier FROM $nodeTable WHERE nodekey = :nodeKey",
            ['nodeKey' => $nodeKey]
        );
        return (isset($result) ? $result : null);
    }
}
