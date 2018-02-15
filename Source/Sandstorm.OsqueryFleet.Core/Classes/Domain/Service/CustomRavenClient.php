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
 * @Flow\Proxy(false)
 */
final class CustomRavenClient extends \Raven_Client
{
    public function get_default_data()
    {
        return array();
    }
    protected function get_http_data() {
        return array();
    }

    protected function get_user_data() {
        return array();
    }
}
