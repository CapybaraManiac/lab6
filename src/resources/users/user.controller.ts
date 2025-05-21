import { Request, Response } from 'express';
import { User } from './user.model';
import { 
  getUsers as getUsersService, 
  getUserById as getUserByIdService, 
  createUser as createUserService, 
  updateUser as updateUserService, 
  deleteUser as deleteUserService 
} from './user.service';

export const getAllUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await getUsersService();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error getting users' });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ message: 'User ID is required' });
      return;
    }
    
    const user = await getUserByIdService(id);
    
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error getting user' });
  }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userData: Omit<User, 'id'> = req.body;
    const newUser = await createUserService(userData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ message: 'User ID is required' });
      return;
    }
    
    const userData: Partial<Omit<User, 'id'>> = req.body;
    const updatedUser = await updateUserService(id, userData);
    
    if (!updatedUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user' });
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ message: 'User ID is required' });
      return;
    }
    
    const success = await deleteUserService(id);
    
    if (!success) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user' });
  }
}; 