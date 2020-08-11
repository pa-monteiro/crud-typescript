import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import PessoasRepository from '../repositories/PessoasRepository';
import CreatePessoaService from '../services/CreatePessoaService';

const pessoasRouter = Router();

pessoasRouter.get('/', async (req, res) => {
  const pessoasRepository = getCustomRepository(PessoasRepository);
  const pessoas = await pessoasRepository.find();

  return res.json(pessoas);
});

pessoasRouter.post('/', async (req, res) => {
  try {
    const { dataAbertura, cnpj, nomeFantasia, razaoSocial } = req.body;

    const createPessoaService = new CreatePessoaService();

    const pessoa = await createPessoaService.execute({
      cnpj,
      dataAbertura,
      nomeFantasia,
      razaoSocial,
    });

    return res.json(pessoa);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

pessoasRouter.delete('/:id', async (req, res) => {
  const pessoasRepository = getCustomRepository(PessoasRepository);

  const pessoas = await pessoasRepository.remove({ id: req.params.id });

  return res.json(pessoas);
});

export default pessoasRouter;
