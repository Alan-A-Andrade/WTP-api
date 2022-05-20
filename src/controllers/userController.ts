import { Request, Response } from 'express';
import userService from '../services/userService.js';

async function signUp(req: Request, res: Response) {
  const user = req.body;

  await userService.signUp(user);

  res.sendStatus(201);
}

async function logIn(req: Request, res: Response) {
  const user = req.body;

  const logInData = await userService.signIn(user);

  res.send(logInData);
}
async function upsertSettings(req: Request, res: Response) {
  const user = res.locals.user;

  const settings = req.body;

  await userService.updateSettings(user.id, settings);

  res.sendStatus(200);
}
async function deleteSettings(req: Request, res: Response) {
  const user = res.locals.user;

  await userService.deleteSettings(user.id);

  res.sendStatus(200);
}

export default {
  signUp,
  logIn,
  upsertSettings,
  deleteSettings
};
