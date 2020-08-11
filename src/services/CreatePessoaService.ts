import { getCustomRepository } from 'typeorm';
import Pessoa from '../models/Pessoa';
import PessoasRepository from '../repositories/PessoasRepository';

interface Request {
  razaoSocial: string;
  nomeFantasia: string;
  cnpj: number;
  dataAbertura: Date;
}

class CreatePessoaService {
  public async execute({
    razaoSocial,
    nomeFantasia,
    cnpj,
    dataAbertura,
  }: Request): Promise<Pessoa> {
    const pessoaRepository = getCustomRepository(PessoasRepository);

    if (!razaoSocial) {
      throw Error('O campo RAZÃO SOCIAL é obrigatório');
    }
    if (!cnpj) {
      throw Error('O campo CNPJ é obrigatório');
    }
    if (!dataAbertura) {
      throw Error('O campo DATA DE ABERTURA é obrigatório');
    }

    const pessoa = pessoaRepository.create({
      razaoSocial,
      nomeFantasia,
      cnpj,
      dataAbertura,
    });

    await pessoaRepository.save(pessoa);

    return pessoa;
  }
}

export default CreatePessoaService;
