import { EntityRepository, Repository } from 'typeorm';
import Pessoa from '../models/Pessoa';

@EntityRepository(Pessoa)
class PessoasRepository extends Repository<Pessoa> {
  public async findByName(nome: string): Promise<Pessoa | null> {
    const findName = await this.findOne({
      where: { nome },
    });

    return findName || null;
  }
}

export default PessoasRepository;
