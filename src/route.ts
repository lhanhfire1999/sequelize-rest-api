import {Application} from 'express';
import {ApplicationContext} from './context';
import {getAll} from './controllers/TestController';
import express from 'express';

export function route(app: Application, ctx: ApplicationContext): void {
  const user = ctx.userController;
  app.get('/users', user.all);
  app.get('/users/:id', user.load);
  app.post('/users', user.insert);
  app.put('/users/:id', user.update);
  app.delete('/users/:id', user.delete);
}

export const router = express.Router();
router.get('/', getAll);
