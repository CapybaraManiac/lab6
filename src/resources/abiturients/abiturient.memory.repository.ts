import { Abiturient } from './abiturient.model.js';

const abiturients: Abiturient[] = [];

export function findAll(): Abiturient[] {
  return abiturients;
}

export function findById(id: string): Abiturient | null {
  return abiturients.find(abiturient => abiturient.id === id) || null;
}

export function create(abiturientData: Omit<Abiturient, 'id'>): Abiturient {
  const newAbiturient: Abiturient = {
    id: Date.now().toString(),
    ...abiturientData
  };
  abiturients.push(newAbiturient);
  return newAbiturient;
}

export function update(id: string, abiturientData: Partial<Omit<Abiturient, 'id'>>): Abiturient | null {
  const index = abiturients.findIndex(abiturient => abiturient.id === id);
  if (index === -1) return null;

  const currentAbiturient = abiturients[index]!;
  const updatedAbiturient: Abiturient = {
    id: currentAbiturient.id,
    firstName: abiturientData.firstName ?? currentAbiturient.firstName,
    lastName: abiturientData.lastName ?? currentAbiturient.lastName,
    numCertificate: abiturientData.numCertificate ?? currentAbiturient.numCertificate
  };
  
  abiturients[index] = updatedAbiturient;
  return updatedAbiturient;
}

export function remove(id: string): boolean {
  const index = abiturients.findIndex(abiturient => abiturient.id === id);
  if (index === -1) return false;

  abiturients.splice(index, 1);
  return true;
} 