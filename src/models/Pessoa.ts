import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pessoas')
class Pessoa {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  razaoSocial: string;

  @Column()
  nomeFantasia: string;

  @Column('int')
  cnpj: number;

  @Column('date')
  dataAbertura: Date;
}

export default Pessoa;
