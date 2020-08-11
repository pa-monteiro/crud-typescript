import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreatePessoas1597108114146 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pessoas',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'razaoSocial',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'nomeFantasia',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'cnpj',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'dataAbertura',
            type: 'date',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pessoas');
  }
}
