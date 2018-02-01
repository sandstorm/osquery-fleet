<?php

namespace Sandstorm\OsqueryFleet\Core\Domain\Model;

use Neos\Utility\Arrays;
use Doctrine\ORM\Mapping as ORM;
use Sandstorm\CrudForms\Annotations as Crud;

trait TaggableTrait {
    /**
     * @var string[]
     * @ORM\Column(type="text_array", nullable=true)
     * @Crud\FormField(visible=false)
     */
    protected $tags;


    /**
     * @Crud\FormField
     * @return string
     */
    public function getTagsAsString()
    {
        return implode(', ', $this->tags);
    }

    /**
     * @param string $tags
     */
    public function setTagsAsString($tags)
    {
        $this->tags = Arrays::trimExplode(',', $tags);
    }
}
