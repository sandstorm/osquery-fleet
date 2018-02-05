<?php

namespace Sandstorm\OsqueryFleet\Core\Domain\Service;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Persistence\Doctrine\Repository;
use Neos\Flow\Utility\Algorithms;
use Sandstorm\OsqueryFleet\Core\Domain\Dto\EnrollmentRequest;
use Sandstorm\OsqueryFleet\Core\Domain\Dto\EnrollmentResponse;
use Sandstorm\OsqueryFleet\Core\Domain\Repository\NodeRepository;

/**
 * @Flow\Scope("singleton")
 */
class EnrollmentService
{

    /**
     * @Flow\Inject
     * @var NodeRepository
     */
    protected $nodeRepository;

    /**
     * @Flow\InjectConfiguration(path="enrollSecret")
     * @var string
     */
    protected $expectedEnrollSecret;

    public function enroll(EnrollmentRequest $enrollmentRequest): EnrollmentResponse
    {
        if ($this->expectedEnrollSecret === $enrollmentRequest->enroll_secret) {
            $newNodeKey = Algorithms::generateRandomToken(100);

            $this->nodeRepository->createOrUpdateNodeDuringEnrollment($enrollmentRequest->host_identifier, $newNodeKey);
            return EnrollmentResponse::validWithNodeKey($newNodeKey);
        } else {
            return EnrollmentResponse::invalid();
        }
    }

    public function isNodeKeyValid(string $nodeKey): bool
    {
        return $this->nodeRepository->isNodeKeyValid($nodeKey);
    }
}
