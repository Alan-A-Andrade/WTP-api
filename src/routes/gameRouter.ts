import { Router } from 'express';
import gameController from '../controllers/gameController.js';
import { ensureAuthenticatedMiddleware } from '../middlewares/ensureAuthenticatedMiddleware.js';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware.js';
import catchSchema from '../schemas/catchSchema.js';

const gameRouter: Router = Router();

gameRouter.get('/hello', (req, res) => { res.send('Hello World!'); });

gameRouter.get(
  '/lives',
  ensureAuthenticatedMiddleware,
  gameController.getLives
);

gameRouter.get(
  '/pokemon',
  ensureAuthenticatedMiddleware,
  gameController.getRandomPokemon
);

gameRouter.post(
  '/pokemon',
  ensureAuthenticatedMiddleware,
  validateSchemaMiddleware(catchSchema),
  gameController.catchPokemon
);

export default gameRouter;
