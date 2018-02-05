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
class StatusLog
{

    /**
     * @var \DateTimeImmutable
     */
    public $timestamp;

    /**
     * @var integer
     */
    public $severity;

    /**
     * @var string
     */
    public $filename;

    /**
     * @var string
     */
    public $line;

    /**
     * @var string
     */
    public $message;

    /**
     * @var Node
     * @ORM\ManyToOne
     * @Crud\FormField(visible=false)
     */
    public $node;
}
