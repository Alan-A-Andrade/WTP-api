import { Router } from 'express';
import userController from '../controllers/userController.js';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware.js';
import loginSchema from '../schemas/loginSchema.js';
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

export default userRouter;
