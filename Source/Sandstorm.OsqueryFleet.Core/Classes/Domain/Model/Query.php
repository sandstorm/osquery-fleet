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
class Query
{
    use TaggableTrait;

    /**
     * @var string
     * @Crud\FormField
     * @Flow\Validate(type="regularExpression", options={"regularExpression" = "/^([a-zA-Z0-9_-])*$/"})
     */
    public $identifier;

    /**
     * @var string
     * @Crud\FormField
     */
    public $name;

    /**
     * the SQL query
     *
     * @var string
     * @ORM\Column(type="text", nullable=true)
     * @Crud\FormField(visibleInForm=false)
     */
    public $sqlQuery;

    /**
     * Interval in seconds (how often to run this query)
     *
     * @var integer
     * @Crud\FormField
     */
    public $interval;

    /**
     * Response as Snapshot?
     *
     * @var boolean
     * @Crud\FormField
     */
    public $snapshot;

    /**
     * Alert SQL "where" part
     *
     * @var string
     * @ORM\Column(type="text", nullable=true)
     */
    public $alertSqlWherePart;

}
