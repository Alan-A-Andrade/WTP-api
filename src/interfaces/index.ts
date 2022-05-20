
import { users, userSettings, pokemons, userPokemons } from '@prisma/client';

export type CreateUserData = Omit<users, 'id'>;

export type CreateUserSettingsData = Omit<userSettings, 'id'>

export type CreatePokemonsData = Omit<pokemons, 'id'>

export type CreateUserPokemonData = userPokemons
