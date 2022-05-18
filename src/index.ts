import express, { json } from 'express';
import 'express-async-errors';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/index.js';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware.js';

const app = express();

dotenv.config();

app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandlerMiddleware);

export default app;
