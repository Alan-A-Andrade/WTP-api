import joi from 'joi';

const catchSchema = joi.object<any>({
  pokemonId: joi.number().required(),
  tentatives: joi.number().required()

});

export default catchSchema;
