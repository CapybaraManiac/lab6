import { Exam } from './exam.model.js';
import { findAll, findById, create, update, remove } from './exam.memory.repository.js';
import { findById as findTeacherById } from '../teachers/teacher.memory.repository.js';

export async function getExams(): Promise<Exam[]> {
  return findAll();
}

export async function getExamById(id: string): Promise<Exam | null> {
  return findById(id);
}

export async function getExamTeachers(id: string): Promise<any[]> {
  const exam = await findById(id);
  if (!exam || !exam.teacherId) return [];
  
  const teacher = await findTeacherById(exam.teacherId);
  return teacher ? [teacher] : [];
}

export async function createExam(examData: Omit<Exam, 'id'>): Promise<Exam> {
  return create(examData);
}

export async function updateExam(id: string, examData: Partial<Omit<Exam, 'id'>>): Promise<Exam | null> {
  return update(id, examData);
}

export async function deleteExam(id: string): Promise<boolean> {
  return remove(id);
} 