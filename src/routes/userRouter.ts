import { Router } from 'express';
import userController from '../controllers/userController.js';
import { ensureAuthenticatedMiddleware } from '../middlewares/ensureAuthenticatedMiddleware.js';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware.js';
import loginSchema from '../schemas/loginSchema.js';
import settingsSchema from '../schemas/settingsSchema.js';
import signupSchema from '../schemas/signupSchema.js';

const userRouter: Router = Router();

userRouter.get('/hello', (req, res) => { res.send('Hello World!'); });

userRouter.post(
  '/signup',
  validateSchemaMiddleware(signupSchema),
  userController.signUp
);
userRouter.post(
  '/login',
  validateSchemaMiddleware(loginSchema),
  userController.logIn
);
userRouter.post(
  '/settings',
  ensureAuthenticatedMiddleware,
  validateSchemaMiddleware(settingsSchema),
  userController.upsertSettings
);
userRouter.delete(
  '/settings',
  ensureAuthenticatedMiddleware,
  userController.deleteSettings
);

userRouter.get(
  '/pokemons',
  ensureAuthenticatedMiddleware,
  userController.getPokemons
);

export default userRouter;
