<?php

namespace Sandstorm\OsqueryFleet\Core\Command;

use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\ORM\EntityManager;
use Neos\Flow\Annotations as Flow;
use Neos\Flow\Cli\CommandController;
use Neos\FluidAdaptor\Service;
use Sandstorm\OsqueryFleet\Core\Domain\Model\StatusLog;
use Sandstorm\OsqueryFleet\Core\Domain\Service\AlertingService;

/**
 * Command controller for managing alerting
 *
 * @Flow\Scope("singleton")
 */
class AlertingCommandController extends CommandController
{

    /**
     * @Flow\Inject
     * @var AlertingService
     */
    protected $alertingService;

    public function setupCommand()
    {
        $this->alertingService->setup();
    }
}
