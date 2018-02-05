<?php

namespace Sandstorm\OsqueryFleet\Ui\ViewHelpers;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\FluidAdaptor\Core\ViewHelper\AbstractViewHelper;
use Sandstorm\CrudForms\Controller\CrudControllerTrait;
use Sandstorm\OsqueryFleet\Core\Domain\Dto\ConfigurationRequest;
use Sandstorm\OsqueryFleet\Core\Domain\Model\Node;
use Sandstorm\OsqueryFleet\Core\Domain\Model\QueryPack;
use Sandstorm\OsqueryFleet\Core\Domain\Service\ConfigurationService;


class ConfigurationViewHelper extends AbstractViewHelper
{

    /**
     * @var boolean
     */
    protected $escapeChildren = false;

    /**
     * @var boolean
     */
    protected $escapeOutput = false;

    /**
     * @Flow\Inject
     * @var ConfigurationService
     */
    protected $configurationService;

    public function render(Node $node)
    {
        $configuration = $this->configurationService->getConfigurationForNode(new ConfigurationRequest($node->nodeKey));
        $this->templateVariableContainer->add('configuration', $configuration);
        $result = $this->renderChildren();
        $this->templateVariableContainer->remove('configuration');
        return $result;
    }
}
