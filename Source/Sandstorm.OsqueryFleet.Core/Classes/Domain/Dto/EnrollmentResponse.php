<?php

namespace Sandstorm\OsqueryFleet\Core\Domain\Dto;

class EnrollmentResponse implements \JsonSerializable
{

    /**
     * @var string
     */
    public $node_key = '';

    /**
     * @var string
     */
    public $node_invalid = false;


    public static function invalid(): EnrollmentResponse
    {
        $r = new EnrollmentResponse();
        $r->node_invalid = true;
        return $r;
    }

    public static function validWithNodeKey($nodeKey): EnrollmentResponse
    {
        $r = new EnrollmentResponse();
        $r->node_key = $nodeKey;
        return $r;
    }


    /**
     * Specify data which should be serialized to JSON
     * @link http://php.net/manual/en/jsonserializable.jsonserialize.php
     * @return mixed data which can be serialized by <b>json_encode</b>,
     * which is a value of any type other than a resource.
     * @since 5.4.0
     */
    public function jsonSerialize()
    {
        return [
            'node_key' => $this->node_key,
            'node_invalid' => $this->node_invalid,
        ];
    }
}
