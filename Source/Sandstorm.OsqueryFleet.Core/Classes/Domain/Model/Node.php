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
class Node
{
    use TaggableTrait;

    /**
     * @var string
     */
    public $hostIdentifier;

    /**
     * @var string
     */
    public $nodeKey;


    /**
     * @var string
     */
    public $hostName;

}
