import { Router } from 'express';
import userRouter from './userRouter.js';
import pokemonRouter from './pokemonRouter.js';
import gameRouter from './gameRouter.js';

const router: Router = Router();

router.use('/auth', userRouter);
router.use('/pokemon', pokemonRouter);
router.use('/game', gameRouter);

export default router;
