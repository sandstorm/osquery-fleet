<?php
namespace Neos\Flow\Persistence\Doctrine\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs! This block will be used as the migration description if getDescription() is not used.
 */
class Version20180206151223 extends AbstractMigration
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
        
        $this->addSql('ALTER TABLE sandstorm_osqueryfleet_core_domain_model_snapshotlog ADD alert BOOLEAN DEFAULT NULL');
        $this->addSql('ALTER TABLE sandstorm_osqueryfleet_core_domain_model_query ADD alertsqlwherepart TEXT DEFAULT NULL');
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
        $this->addSql('ALTER TABLE sandstorm_osqueryfleet_core_domain_model_query DROP alertsqlwherepart');
        $this->addSql('ALTER TABLE sandstorm_osqueryfleet_core_domain_model_snapshotlog DROP alert');
    }
}