import { Router } from 'express';
import pokemonController from '../controllers/pokemonController.js';

const pokemonRouter: Router = Router();

pokemonRouter.post(
  '/seeddatabase',
  pokemonController.seedDatabase
);

export default pokemonRouter;
