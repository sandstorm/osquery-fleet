<?php
namespace Neos\Flow\Persistence\Doctrine\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs! This block will be used as the migration description if getDescription() is not used.
 */
class Version20180205104715 extends AbstractMigration
{

    /**
     * @return string
     */
    public function getDescription()
    {
        return '';
    }

    /**
     * @param Schema $schema
     * @return void
     */
    public function up(Schema $schema)
    {
        // this up() migration is autogenerated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'postgresql', 'Migration can only be executed safely on "postgresql".');
        
        $this->addSql('CREATE TABLE sandstorm_osqueryfleet_core_domain_model_snapshotlog (persistence_object_identifier VARCHAR(40) NOT NULL, node VARCHAR(40) DEFAULT NULL, timestamp TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, queryorquerypackidentifier VARCHAR(255) NOT NULL, snapshot jsonb NOT NULL, PRIMARY KEY(persistence_object_identifier))');
        $this->addSql('CREATE INDEX IDX_194FB0CE857FE845 ON sandstorm_osqueryfleet_core_domain_model_snapshotlog (node)');
        $this->addSql('COMMENT ON COLUMN sandstorm_osqueryfleet_core_domain_model_snapshotlog.snapshot IS \'(DC2Type:flow_json_array)\'');
        $this->addSql('ALTER TABLE sandstorm_osqueryfleet_core_domain_model_snapshotlog ADD CONSTRAINT FK_194FB0CE857FE845 FOREIGN KEY (node) REFERENCES sandstorm_osqueryfleet_core_domain_model_node (persistence_object_identifier) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    /**
     * @param Schema $schema
     * @return void
     */
    public function down(Schema $schema)
    {
        // this down() migration is autogenerated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'postgresql', 'Migration can only be executed safely on "postgresql".');
        
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP TABLE sandstorm_osqueryfleet_core_domain_model_snapshotlog');
    }
}