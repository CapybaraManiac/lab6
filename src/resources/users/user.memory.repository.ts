import { User } from './user.model';

const users: User[] = [];

export function findAll(): User[] {
  return users;
}

export function findById(id: string): User | null {
  return users.find(user => user.id === id) || null;
}

export function create(userData: Omit<User, 'id'>): User {
  const newUser: User = {
    id: Date.now().toString(),
    ...userData
  };
  users.push(newUser);
  return newUser;
}

export function update(id: string, userData: Partial<Omit<User, 'id'>>): User | null {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return null;

  const currentUser = users[index]!;
  const updatedUser: User = {
    id: currentUser.id,
    firstName: userData.firstName ?? currentUser.firstName,
    lastName: userData.lastName ?? currentUser.lastName,
    numCertificate: userData.numCertificate ?? currentUser.numCertificate
  };
  
  users[index] = updatedUser;
  return updatedUser;
}

export function remove(id: string): boolean {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return false;

  users.splice(index, 1);
  return true;
} 