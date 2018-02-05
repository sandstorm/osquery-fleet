<?php

namespace Sandstorm\OsqueryFleet\Ui\Controller;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Mvc\Controller\ActionController;
use Sandstorm\CrudForms\Controller\CrudControllerTrait;
use Sandstorm\OsqueryFleet\Core\Domain\Model\QueryPack;

/**
 * @Flow\Scope("singleton")
 */
class QueryPackController extends ActionController
{
    use CrudControllerTrait;

    protected function getModelType()
    {
        return QueryPack::class;
    }

    public function previewAction(QueryPack $object)
    {
        return $object->getProcessedJson();
    }
}
