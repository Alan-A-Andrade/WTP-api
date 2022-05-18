import { Router } from 'express';

const authRouter: Router = Router();

authRouter.get('/hello', (req, res) => { res.send('Hello World!'); });

export default authRouter;
