<?php

namespace Sandstorm\OsqueryFleet\Core\Domain\Dto;

class ConfigurationRequest
{

    /**
     * @var string
     */
    public $node_key;

    /**
     * ConfigurationRequest constructor.
     * @param string $node_key
     */
    public function __construct(string $node_key)
    {
        $this->node_key = $node_key;
    }
}
