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
class QueryPack
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
     * NOTE: we cannot use JSON data type here yet; as we have a non-standards-conformant format here (sadly), which supports newlines in strings.
     *
     * @var string
     * @Crud\FormField(editor="TextArea")
     * @ORM\Column(type="text", nullable=true)
     */
    public $sourceJson;

    /**
     * @var string
     * @Crud\FormField(editor="TextArea")
     * @ORM\Column(type="text", nullable=true)
     */
    public $jqTransformationRules;


    /**
     * @Crud\FormField(readonly=true, editor="TextArea")
     * @var string
     */
    public function getProcessedJson()
    {
        $sourceJson = '';

        if ($this->sourceJson !== null) {
            $sourceJson = str_replace("\\\r\n", '', $this->sourceJson);
        }

        if ($this->jqTransformationRules !== null) {
            $process = new Process([
                '/usr/local/bin/jq',
                $this->jqTransformationRules
            ]);
            $process->setInput($sourceJson);
            $process->run();
            return $process->getOutput();
        }

        return $sourceJson;
    }

    /**
     * @param string $processedJson
     */
    public function setProcessedJson($processedJson)
    {

    }

}
