<?php

namespace Sandstorm\OsqueryFleet\Core\Domain\Dto;

use Neos\Utility\Arrays;

class ConfigurationResponse implements \JsonSerializable
{

    /**
     * @var string
     */
    public $node_invalid = false;

    /**
     * @var array
     */
    public $configuration;

    public static function invalid(): ConfigurationResponse
    {
        $r = new ConfigurationResponse();
        $r->node_invalid = true;
        return $r;
    }

    public static function validWithConfiguration(array $configuration): ConfigurationResponse
    {
        $r = new ConfigurationResponse();
        $r->configuration = $configuration;
        return $r;
    }

    public function jsonSerialize()
    {
        return Arrays::arrayMergeRecursiveOverrule($this->configuration, [
            'node_invalid' => $this->node_invalid
        ]);
    }
}
