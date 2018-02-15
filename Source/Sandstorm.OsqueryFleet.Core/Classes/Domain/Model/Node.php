<?php

namespace Sandstorm\OsqueryFleet\Core\Domain\Model;

use Neos\Flow\Annotations as Flow;
use Neos\Utility\Arrays;
use Sandstorm\CrudForms\Annotations as Crud;
use Symfony\Component\Process\Process;
use Doctrine\ORM\Mapping as ORM;

/**
 * @Flow\Entity
 * @ORM\Table(uniqueConstraints={@ORM\UniqueConstraint(columns={"hostidentifier"}), @ORM\UniqueConstraint(columns={"nodekey"})})
 *
 * We ensure uniqueness on the DB level for the following two cases:
 * - The host identifier must be unique, as we use this during enrollment to figure out whether we know a node already.
 * - The nodekey must be unique (should be random!), as we use it to identify a node in all further requests.
 */
class Node
{
    use TaggableTrait;

    /**
     * @Crud\FormField(visibleInForm=false)
     * @var string
     */
    public $hostIdentifier;

    /**
     * @Crud\FormField(visible=false)
     * @var string
     */
    public $nodeKey;

    /**
     * @var string
     * @ORM\Column(nullable=true)
     */
    public $hostName;

    /**
     * @Crud\FormField(visibleInForm=false)
     * @var \DateTimeImmutable
     */
    public $firstEnrollmentTimestamp;

    /**
     * @Crud\FormField(visibleInForm=false)
     * @var \DateTimeImmutable
     */
    public $mostRecentEnrollmentTimestamp;

    /**
     * @return string
     */
    public function getHostIdentifier(): string
    {
        return $this->hostIdentifier;
    }
}
