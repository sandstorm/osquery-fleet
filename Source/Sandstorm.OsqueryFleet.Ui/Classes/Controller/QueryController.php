<?php

namespace Sandstorm\OsqueryFleet\Ui\Controller;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Mvc\Controller\ActionController;
use Sandstorm\CrudForms\Controller\CrudControllerTrait;
use Sandstorm\OsqueryFleet\Core\Domain\Model\Node;
use Sandstorm\OsqueryFleet\Core\Domain\Model\Query;
use Sandstorm\OsqueryFleet\Core\Domain\Model\QueryPack;
use Sandstorm\OsqueryFleet\Core\Domain\Repository\SnapshotLogRepository;

/**
 * @Flow\Scope("singleton")
 */
class QueryController extends ActionController
{
    use CrudControllerTrait;

    /**
     * @Flow\Inject
     * @var SnapshotLogRepository
     */
    protected $snapshotLogRepository;

    protected function getModelType()
    {
        return Query::class;
    }

    public function resultsAction(Query $object)
    {
        $results = $this->snapshotLogRepository->findMostRecentResultForEachNode($object->identifier);
        $this->view->assign('results', $results);
        $this->view->assign('query', $object);
    }

    public function resultsForNodeAction(Query $object, Node $node)
    {
        $results = $this->snapshotLogRepository->findRecentResultsForSingleNode($object->identifier, $node->getHostIdentifier());
        $this->view->assign('results', $results);
        $this->view->assign('query', $object);
    }
}
