<?php

namespace Sandstorm\OsqueryFleet\Ui\ViewHelpers;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\FluidAdaptor\Core\ViewHelper\AbstractViewHelper;
use Sandstorm\CrudForms\Controller\CrudControllerTrait;
use Sandstorm\OsqueryFleet\Core\Domain\Model\QueryPack;


class RenderSeverityViewHelper extends AbstractViewHelper
{

    public function render(string $severity)
    {
        switch ($severity) {
            // INFO
            case 0: return '';
            // WARNING
            case 1: return 'bg-warning';
            // ERROR
            case 2: return 'bg-danger';
        }
    }
}
