import { client } from '../database.js';
import { CreateUserPokemonData } from '../interfaces';

async function insert(data: CreateUserPokemonData) {
  return client.userPokemons.create({
    data
  });
}

async function findAllbyUserId(userId:number) {
  return client.userPokemons.findMany({
    where: { userId },
    include: { pokemons: true }
  });
}

export default {
  insert,
  findAllbyUserId
};
