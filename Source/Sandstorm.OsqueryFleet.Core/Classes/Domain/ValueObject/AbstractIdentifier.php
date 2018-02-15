<?php
namespace Sandstorm\OsqueryFleet\Core\Domain\ValueObject;


use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\UuidInterface;

/**
 * Abstract class for an identifier value object
 */
abstract class AbstractIdentifier implements \JsonSerializable
{
    /**
     * @var UuidInterface
     */
    protected $uuid;

    /**
     * Constructor.
     *
     * @param string $existingIdentifier
     */
    public function __construct(string $existingIdentifier = null)
    {
        if ($existingIdentifier !== null) {
            $this->uuid = Uuid::fromString($existingIdentifier);
        } else {
            $this->uuid = Uuid::uuid4();
        }
    }

    /**
     * @param string $string
     * @return static
     */
    public static function fromString(string $string)
    {
        $instance = new static();
        $instance->uuid = Uuid::fromString($string);
        return $instance;
    }

    /**
     * @return string
     */
    public function __toString(): string
    {
        return $this->uuid->toString();
    }

    /**
     * @return string
     */
    public function jsonSerialize()
    {
        return $this->uuid->toString();
    }
}
