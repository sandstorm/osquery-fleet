<?php

namespace Sandstorm\OsqueryFleet\Core\Domain\Repository;

use Doctrine\ORM\Query\ResultSetMappingBuilder;
use Neos\Flow\Annotations as Flow;
use Neos\Flow\Persistence\Doctrine\Repository;
use Sandstorm\OsqueryFleet\Core\Domain\Model\Node;
use Sandstorm\OsqueryFleet\Core\Domain\Model\Query;

/**
 * @Flow\Scope("singleton")
 */
class QueryRepository extends Repository
{

    public function getQueriesForNode($nodeKey)
    {
        $nodeTable = $this->getEntityManager()->getClassMetadata(Node::class)->getTableName();
        $queryTable = $this->getEntityManager()->getClassMetadata(Query::class)->getTableName();


        $rsmb = new ResultSetMappingBuilder($this->getEntityManager());
        $rsmb->addRootEntityFromClassMetadata(Query::class, 'query');

        $query = $this->getEntityManager()->createNativeQuery("
            SELECT * FROM $queryTable query
            JOIN
                /* node tags and query tags must intersect (&& operator on ARRAY in postgres)*/
                $nodeTable node ON node.tags && query.tags
            WHERE
                node.nodekey = :nodeKey
        ", $rsmb);
        $query->setParameter('nodeKey', $nodeKey);

        return $query->getResult();
    }
}
