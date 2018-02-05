<?php

namespace Sandstorm\OsqueryFleet\Core\Controller;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\Flow\Property\PropertyMapper;
use Neos\Flow\Property\PropertyMappingConfiguration;
use Sandstorm\CrudForms\Controller\CrudControllerTrait;
use Sandstorm\OsqueryFleet\Core\Domain\Dto\ConfigurationRequest;
use Sandstorm\OsqueryFleet\Core\Domain\Dto\ConfigurationResponse;
use Sandstorm\OsqueryFleet\Core\Domain\Dto\EnrollmentRequest;
use Sandstorm\OsqueryFleet\Core\Domain\Dto\LogRequest;
use Sandstorm\OsqueryFleet\Core\Domain\Dto\LogResponse;
use Sandstorm\OsqueryFleet\Core\Domain\Model\Node;
use Sandstorm\OsqueryFleet\Core\Domain\Service\ConfigurationService;
use Sandstorm\OsqueryFleet\Core\Domain\Service\EnrollmentService;
use Sandstorm\OsqueryFleet\Core\Domain\Service\LoggingService;

/**
 * @Flow\Scope("singleton")
 */
class OsqueryApiController extends ActionController
{

    protected $supportedMediaTypes = array('application/json');

    /**
     * @Flow\Inject
     * @var EnrollmentService
     */
    protected $enrollmentService;

    /**
     * @Flow\Inject
     * @var ConfigurationService
     */
    protected $configurationService;

    /**
     * @Flow\Inject
     * @var LoggingService
     */
    protected $loggingService;

    /**
     * @Flow\Inject
     * @var PropertyMapper
     */
    protected $propertyMapper;

    public function enrollAction()
    {
        /* @var $enrollmentRequest \Sandstorm\OsqueryFleet\Core\Domain\Dto\EnrollmentRequest */
        $enrollmentRequest = $this->convertBodyTo(EnrollmentRequest::class);
        $enrollmentResponse = $this->enrollmentService->enroll($enrollmentRequest);
        return json_encode($enrollmentResponse);
    }

    public function configAction()
    {
        /* @var $configurationRequest \Sandstorm\OsqueryFleet\Core\Domain\Dto\ConfigurationRequest */
        $configurationRequest = $this->convertBodyTo(ConfigurationRequest::class);

        if (!$this->enrollmentService->isNodeKeyValid($configurationRequest->node_key)) {
            return json_encode(ConfigurationResponse::invalid());
        }

        $configuration = $this->configurationService->getConfigurationForNode($configurationRequest);
        return json_encode($configuration->toResponse());
    }

    public function logAction()
    {
        /* @var $logRequest \Sandstorm\OsqueryFleet\Core\Domain\Dto\LogRequest */
        $logRequest = $this->convertBodyTo(LogRequest::class);

        if (!$this->enrollmentService->isNodeKeyValid($logRequest->node_key)) {
            return json_encode(LogResponse::invalid());
        }

        $this->loggingService->log($logRequest);

        return json_encode(LogResponse::valid());
    }


    private function convertBodyTo($targetClassName)
    {
        $body = $this->request->getHttpRequest()->getParsedBody();
        $c = new PropertyMappingConfiguration();
        $c->allowAllProperties();
        $c->skipUnknownProperties();
        return $this->propertyMapper->convert($body, $targetClassName, $c);
    }
}
