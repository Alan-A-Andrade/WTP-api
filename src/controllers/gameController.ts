import { Request, Response } from 'express';
import gameService from '../services/gameService.js';

async function getLives(req: Request, res: Response) {
  const user = res.locals.user;
  const lives = await gameService.getLives(user);

  res.send({ lives });
}

async function catchPokemon(req: Request, res: Response) {
  const { pokemonId, tentatives } = req.body;
  const user = res.locals.user;

  await gameService.catchPokemon(user.id, pokemonId, tentatives);

  res.sendStatus(200);
}

async function getRandomPokemon(req: Request, res: Response) {
  const user = res.locals.user;

  const pokemon = await gameService.getRandomPokemon(user.id);

  res.send(pokemon);
}

export default {
  getLives,
  catchPokemon,
  getRandomPokemon
};
