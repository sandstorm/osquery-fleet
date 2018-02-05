<?php

namespace Sandstorm\OsqueryFleet\Core\Domain\Model;

use Neos\Flow\Annotations as Flow;
use Neos\Utility\Arrays;
use Sandstorm\CrudForms\Annotations as Crud;
use Symfony\Component\Process\Process;
use Doctrine\ORM\Mapping as ORM;

/**
 * @Flow\Entity
 */
class SnapshotLog
{

    /**
     * @var \DateTimeImmutable
     */
    public $timestamp;

    /**
     * @var string
     */
    public $queryOrQueryPackIdentifier;

    /**
     * @var Node
     * @ORM\ManyToOne
     */
    public $node;

    /**
     * @ORM\Column(type="flow_json_array")
     * @var array
     */
    public $snapshot;
}
