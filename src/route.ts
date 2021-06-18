import {Application} from 'express';
import {ApplicationContext} from './context';
import {All, Load, Insert, Update ,Delete} from './controllers/TestController';
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
router.get('/test', All);
router.get('/test/:id', Load);
router.post('/test', Insert);
router.put('/test/:id', Update);
router.delete('/test/:id', Delete);

