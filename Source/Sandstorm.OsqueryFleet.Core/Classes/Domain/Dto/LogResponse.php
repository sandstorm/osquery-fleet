<?php

namespace Sandstorm\OsqueryFleet\Core\Domain\Dto;

class LogResponse implements \JsonSerializable
{

    /**
     * @var string
     */
    public $node_invalid = false;


    public static function invalid(): LogResponse
    {
        $r = new LogResponse();
        $r->node_invalid = true;
        return $r;
    }

    public static function valid(): LogResponse
    {
        $r = new LogResponse();
        return $r;
    }

    public function jsonSerialize()
    {
        return [
            'node_invalid' => $this->node_invalid,
        ];
    }
}
