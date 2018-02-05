<?php

namespace Sandstorm\OsqueryFleet\Core\Domain\Model;

use Neos\Flow\Annotations as Flow;
use Neos\Utility\Arrays;
use Sandstorm\CrudForms\Annotations as Crud;
use Sandstorm\OsqueryFleet\Core\Domain\Dto\ConfigurationResponse;
use Symfony\Component\Process\Process;
use Doctrine\ORM\Mapping as ORM;

/**
 * NO ENTITY - used for building up the config for a node
 */
class Configuration
{

    /**
     * @var QueryPack[]
     */
    protected $queryPacks = [];

    /**
     * @var Query[]
     */
    protected $queries = [];

    public function addQueryPack(QueryPack $queryPack)
    {
        $this->queryPacks[] = $queryPack;
    }

    public function addQuery(Query $query)
    {
        $this->queries[] = $query;
    }

    /**
     * @return QueryPack[]
     */
    public function getQueryPacks(): array
    {
        return $this->queryPacks;
    }

    /**
     * @return Query[]
     */
    public function getQueries(): array
    {
        return $this->queries;
    }

    public function toResponse(): ConfigurationResponse
    {
        $configuration = [
            'packs' => [],
            'schedule' => []
        ];

        foreach ($this->queryPacks as $pack) {
            /* @var $pack QueryPack */
            $configuration['packs'][$pack->identifier] = $pack->getProcessedJsonAsArray();
        }

        foreach ($this->queries as $query) {
            /* @var $query Query */
            $configuration['schedule'][$query->identifier] = [
                'query' => $query->sqlQuery,
                'interval' => $query->interval,
                'snapshot' => $query->snapshot
            ];
        }

        return ConfigurationResponse::validWithConfiguration($configuration);
    }
}
