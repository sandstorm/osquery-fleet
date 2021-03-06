<?php

namespace Sandstorm\OsqueryFleet\Core\Domain\Repository;

use Doctrine\ORM\Query\ResultSetMapping;
use Doctrine\ORM\Query\ResultSetMappingBuilder;
use Neos\Flow\Annotations as Flow;
use Neos\Flow\Persistence\Doctrine\Repository;
use Sandstorm\OsqueryFleet\Core\Domain\Model\Node;
use Sandstorm\OsqueryFleet\Core\Domain\Model\QueryPack;

/**
 * @Flow\Scope("singleton")
 */
class QueryPackRepository extends Repository
{

    public function getQueryPacksForNode($nodeKey)
    {
        $nodeTable = $this->getEntityManager()->getClassMetadata(Node::class)->getTableName();
        $queryPackTable = $this->getEntityManager()->getClassMetadata(QueryPack::class)->getTableName();


        $rsmb = new ResultSetMappingBuilder($this->getEntityManager());
        $rsmb->addRootEntityFromClassMetadata(QueryPack::class, 'queryPack');

        $query = $this->getEntityManager()->createNativeQuery("
            SELECT * FROM $queryPackTable queryPack
            JOIN
                /* node tags and query pack tags must intersect (&& operator on ARRAY in postgres)*/
                $nodeTable node ON node.tags && queryPack.tags
            WHERE
                node.nodekey = :nodeKey
        ", $rsmb);
        $query->setParameter('nodeKey', $nodeKey);

        return $query->getResult();
    }
}
