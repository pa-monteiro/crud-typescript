import { Router } from 'express';
import pessoasRouter from './pessoas.route';

const routes = Router();

routes.use('/pessoas', pessoasRouter);

export default routes;
