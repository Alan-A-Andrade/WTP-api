import joi from 'joi';

const settingsSchema = joi.object<any>({
  colorRed: joi.number().required().min(0).max(255),
  colorBlue: joi.number().required().min(0).max(255),
  colorGreen: joi.number().required().min(0).max(255),
  language: joi.string().required(),
  fontSize: joi.number().required()

});

export default settingsSchema;
