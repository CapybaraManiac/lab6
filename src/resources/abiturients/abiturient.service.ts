import { Abiturient } from './abiturient.model.js';
import { findAll, findById, create, update, remove } from './abiturient.memory.repository.js';
import { findByAbiturientId, removeByAbiturientId } from '../exams/exam.memory.repository.js';

export async function getAbiturients(): Promise<Abiturient[]> {
  return findAll();
}

export async function getAbiturientById(id: string): Promise<Abiturient | null> {
  return findById(id);
}

export async function getAbiturientExams(id: string): Promise<any[]> {
  return findByAbiturientId(id);
}

export async function createAbiturient(abiturientData: Omit<Abiturient, 'id'>): Promise<Abiturient> {
  return create(abiturientData);
}

export async function updateAbiturient(id: string, abiturientData: Partial<Omit<Abiturient, 'id'>>): Promise<Abiturient | null> {
  return update(id, abiturientData);
}

export async function deleteAbiturient(id: string): Promise<boolean> {
  const success = remove(id);
  if (success) {
    removeByAbiturientId(id);
  }
  return success;
} 