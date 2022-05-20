import { Request, Response } from 'express';
import pokemonService from '../services/pokemonService.js';

async function seedDatabase(req: Request, res: Response) {
  const { secretKey } = req.body;

  await pokemonService.createManyPokemons(secretKey);

  res.sendStatus(200);
}

export default {
  seedDatabase
};
