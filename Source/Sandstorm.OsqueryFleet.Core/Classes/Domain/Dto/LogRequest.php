<?php

namespace Sandstorm\OsqueryFleet\Core\Domain\Dto;

class LogRequest
{

    /**
     * @var string
     */
    public $node_key;

    /**
     * @var string
     */
    public $log_type;

    /**
     * @var array
     */
    public $data;
}
