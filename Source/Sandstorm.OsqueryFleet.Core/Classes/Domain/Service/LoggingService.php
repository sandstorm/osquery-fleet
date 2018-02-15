<?php

namespace Sandstorm\OsqueryFleet\Core\Domain\Service;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Persistence\Doctrine\Repository;
use Neos\Flow\Utility\Algorithms;
use Sandstorm\OsqueryFleet\Core\Domain\Dto\EnrollmentRequest;
use Sandstorm\OsqueryFleet\Core\Domain\Dto\EnrollmentResponse;
use Sandstorm\OsqueryFleet\Core\Domain\Dto\LogRequest;
use Sandstorm\OsqueryFleet\Core\Domain\Model\SnapshotLog;
use Sandstorm\OsqueryFleet\Core\Domain\Model\StatusLog;
use Sandstorm\OsqueryFleet\Core\Domain\Repository\NodeRepository;
use Sandstorm\OsqueryFleet\Core\Domain\Repository\SnapshotLogRepository;
use Sandstorm\OsqueryFleet\Core\Domain\Repository\StatusLogRepository;

/**
 * @Flow\Scope("singleton")
 */
class LoggingService
{


    /**
     * @Flow\Inject
     * @var NodeRepository
     */
    protected $nodeRepository;

    /**
     * @Flow\Inject
     * @var StatusLogRepository
     */
    protected $statusLogRepository;

    /**
     * @Flow\Inject
     * @var SnapshotLogRepository
     */
    protected $snapshotLogRepository;

    /**
     * @Flow\Inject
     * @var AlertingService
     */
    protected $alertingService;

    public function log(LogRequest $logRequest): void
    {
        switch ($logRequest->log_type) {
            case 'status':
                $this->logStatus($logRequest);
                break;
            case 'result':
                $this->logResult($logRequest);
                break;
            default:
                throw new \Exception('TODO: Log type ' . $logRequest->log_type . ' not supported.');
        }
    }

    private function logStatus(LogRequest $logRequest)
    {
        $nodeIdentifier = $this->nodeRepository->findNodeIdentifierForNodeKey($logRequest->node_key);

        foreach ($logRequest->data as $singleLine) {
            $statusLog = new StatusLog();
            $statusLog->filename = $singleLine['filename'];
            $statusLog->line = $singleLine['line'];
            $statusLog->message = $singleLine['message'];
            $statusLog->severity = intval($singleLine['severity'], 10);
            $statusLog->timestamp = \DateTimeImmutable::createFromFormat('U', $singleLine['unixTime']);

            $this->statusLogRepository->logLine($statusLog, $nodeIdentifier);
        }
    }

    private function logResult(LogRequest $logRequest)
    {
        $nodeIdentifier = $this->nodeRepository->findNodeIdentifierForNodeKey($logRequest->node_key);

        foreach ($logRequest->data as $row) {
            switch ($row['action']) {
                case 'added':
                    // TODO
                    break;
                case 'removed':
                    // TODO
                    break;
                case 'snapshot':
                    $this->logSnapshot($row, $nodeIdentifier);
                    break;
                default:
                    throw new \Exception('TODO: action ' . $row['action'] . ' not supported.');
            }
        }
    }

    private function logSnapshot(array $row, string $nodeIdentifier)
    {
        $snapshotLog = new SnapshotLog();
        $snapshotLog->snapshot = $row['snapshot'];
        $snapshotLog->queryOrQueryPackIdentifier = $row['name'];
        $snapshotLog->timestamp = \DateTimeImmutable::createFromFormat('U', $row['unixTime']);

        $snapshotLogIdentifier = $this->snapshotLogRepository->logLine($snapshotLog, $nodeIdentifier);
        $this->alertingService->evaluateAlert($snapshotLogIdentifier, $row['name']);
    }
}
