// server/controllers/apiController.ts
import { Request, Response } from 'express';
import User, { IUser } from '../models/User.model';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: IUser[] = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};