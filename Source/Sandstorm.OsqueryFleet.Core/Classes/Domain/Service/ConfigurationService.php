<?php

namespace Sandstorm\OsqueryFleet\Core\Domain\Service;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Persistence\Doctrine\Repository;
use Neos\Flow\Utility\Algorithms;
use Sandstorm\OsqueryFleet\Core\Domain\Dto\ConfigurationRequest;
use Sandstorm\OsqueryFleet\Core\Domain\Dto\ConfigurationResponse;
use Sandstorm\OsqueryFleet\Core\Domain\Dto\EnrollmentRequest;
use Sandstorm\OsqueryFleet\Core\Domain\Dto\EnrollmentResponse;
use Sandstorm\OsqueryFleet\Core\Domain\Model\Configuration;
use Sandstorm\OsqueryFleet\Core\Domain\Model\QueryPack;
use Sandstorm\OsqueryFleet\Core\Domain\Repository\NodeRepository;
use Sandstorm\OsqueryFleet\Core\Domain\Repository\QueryPackRepository;
use Sandstorm\OsqueryFleet\Core\Domain\Repository\QueryRepository;

/**
 * @Flow\Scope("singleton")
 */
class ConfigurationService
{

    /**
     * @Flow\Inject
     * @var NodeRepository
     */
    protected $nodeRepository;

    /**
     * @Flow\Inject
     * @var QueryPackRepository
     */
    protected $queryPackRepository;

    /**
     * @Flow\Inject
     * @var QueryRepository
     */
    protected $queryRepository;


    public function getConfigurationForNode(ConfigurationRequest $configurationRequest): Configuration
    {
        $configuration = new Configuration();

        $queryPacks = $this->queryPackRepository->getQueryPacksForNode($configurationRequest->node_key);
        foreach ($queryPacks as $queryPack) {
            $configuration->addQueryPack($queryPack);
        }

        $queries = $this->queryRepository->getQueriesForNode($configurationRequest->node_key);
        foreach ($queries as $query) {
            $configuration->addQuery($query);
        }

        return $configuration;
    }
}
