import joi from 'joi';

const loginSchema = joi.object<any>({
  password: joi.string().required(),
  email: joi.string().required()
});

export default loginSchema;
