<?php

namespace Sandstorm\OsqueryFleet\Ui\ViewHelpers;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\FluidAdaptor\Core\ViewHelper\AbstractViewHelper;
use Sandstorm\CrudForms\Controller\CrudControllerTrait;
use Sandstorm\OsqueryFleet\Core\Domain\Model\QueryPack;


class UniqueIdViewHelper extends AbstractViewHelper
{

    /**
     * @var boolean
     */
    protected $escapeChildren = false;

    /**
     * @var boolean
     */
    protected $escapeOutput = false;

    public function render()
    {
        $this->templateVariableContainer->add('id', uniqid('id-'));
        $result = $this->renderChildren();
        $this->templateVariableContainer->remove('id');
        return $result;
    }
}
