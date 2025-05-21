import { User } from './user.model';
import { findAll, findById, create, update, remove } from './user.memory.repository';

export async function getUsers(): Promise<User[]> {
  return findAll();
}

export async function getUserById(id: string): Promise<User | null> {
  return findById(id);
}

export async function createUser(userData: Omit<User, 'id'>): Promise<User> {
  return create(userData);
}

export async function updateUser(id: string, userData: Partial<Omit<User, 'id'>>): Promise<User | null> {
  return update(id, userData);
}

export async function deleteUser(id: string): Promise<boolean> {
  return remove(id);
} 