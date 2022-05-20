import { client } from '../database.js';
import { CreatePokemonsData } from '../interfaces';

async function createMany(data: CreatePokemonsData[]) {
  return client.pokemons.createMany({
    data,
    skipDuplicates: true
  });
}

async function findByPokemonId(pokemonId:number) {
  return client.pokemons.findUnique({
    where: { pokemonId }
  });
}

export default {
  createMany,
  findByPokemonId
};
