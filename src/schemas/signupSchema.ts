import joi from 'joi';

const signupSchema = joi.object<any>({
  trainer: joi.string().required(),
  password: joi.string().required(),
  email: joi.string().required()
});

export default signupSchema;
