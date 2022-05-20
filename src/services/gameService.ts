import userPokemonRepository from '../repositories/userPokemonRepository.js';
import { users, userPokemons } from '@prisma/client';
import pokemonRepository from '../repositories/pokemonRepository.js';

async function getLives(user: users) {
  const pokemonList = await userPokemonRepository.findAllbyUserId(user.id);

  const today = Date.now();
  const createDate = Date.parse(`${user.createAt}`);

  const numberLives = 3 * Math.floor((today - createDate) / (1000 * 60 * 60 * 24) + 1);

  if (pokemonList.length === 0) {
    return numberLives;
  }

  function countTries(total: number, userPokemon: userPokemons) {
    return total + userPokemon.tentatives;
  }

  const tries = pokemonList.reduce(countTries, 0);

  return numberLives - tries;
}

async function catchPokemon(userId: number, pokemonId: number, tentatives: number) {
  await userPokemonRepository.insert({ userId, pokemonId, tentatives });
}

async function getRandomPokemon(userId: number) {
  const pokemonList = await userPokemonRepository.findAllbyUserId(userId);

  const pokemonIdList = pokemonList.map((pokemon) => pokemon.pokemonId);

  if (pokemonIdList.length >= 151) {
    return { text: 'congratulations!' };
  }

  let pokemonId: number;
  let isUnique = false;
  while (!isUnique) {
    pokemonId = getRandomInt(1, 151);
    isUnique = !pokemonIdList.includes(pokemonId);
  }

  const pokemon = await pokemonRepository.findByPokemonId(pokemonId);
  return pokemon;
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default {
  getLives,
  catchPokemon,
  getRandomPokemon
};
