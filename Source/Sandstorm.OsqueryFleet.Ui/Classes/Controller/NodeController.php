<?php

namespace Sandstorm\OsqueryFleet\Ui\Controller;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Mvc\Controller\ActionController;
use Sandstorm\CrudForms\Controller\CrudControllerTrait;
use Sandstorm\OsqueryFleet\Core\Domain\Dto\ConfigurationRequest;
use Sandstorm\OsqueryFleet\Core\Domain\Model\Node;
use Sandstorm\OsqueryFleet\Core\Domain\Model\StatusLog;
use Sandstorm\OsqueryFleet\Core\Domain\Repository\StatusLogRepository;
use Sandstorm\OsqueryFleet\Core\Domain\Service\ConfigurationService;

/**
 * @Flow\Scope("singleton")
 */
class NodeController extends ActionController
{
    use CrudControllerTrait;

    /**
     * @Flow\Inject
     * @var ConfigurationService
     */
    protected $configurationService;

    /**
     * @Flow\Inject
     * @var StatusLogRepository
     */
    protected $statusLogRepository;

    protected function getModelType()
    {
        return Node::class;
    }

    public function showConfigurationAction(Node $object)
    {
        $configuration = $this->configurationService->getConfigurationForNode(new ConfigurationRequest($object->nodeKey));
        var_dump($configuration->toResponse()->jsonSerialize());
        die();
    }

    public function configurationAjaxAction(Node $object)
    {
        $configuration = $this->configurationService->getConfigurationForNode(new ConfigurationRequest($object->nodeKey));
        $this->view->assign('configuration', $configuration);
        $this->view->assign('object', $object);
    }

    public function statusLogAction(Node $object)
    {
        $this->view->assign('node', $object);
        $this->view->assign('model', StatusLog::class);
        $this->view->assign('logs', $this->statusLogRepository->findByNode($object));
    }
}
