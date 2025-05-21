import { Teacher } from './teacher.model.js';
import { findAll, findById, create, update, remove } from './teacher.memory.repository.js';
import { findByTeacherId, removeByTeacherId } from '../exams/exam.memory.repository.js';

export async function getTeachers(): Promise<Teacher[]> {
  return findAll();
}

export async function getTeacherById(id: string): Promise<Teacher | null> {
  return findById(id);
}

export async function getTeacherExams(id: string): Promise<any[]> {
  return findByTeacherId(id);
}

export async function createTeacher(teacherData: Omit<Teacher, 'id'>): Promise<Teacher> {
  return create(teacherData);
}

export async function updateTeacher(id: string, teacherData: Partial<Omit<Teacher, 'id'>>): Promise<Teacher | null> {
  return update(id, teacherData);
}

export async function deleteTeacher(id: string): Promise<boolean> {
  const success = remove(id);
  if (success) {
    removeByTeacherId(id);
  }
  return success;
} 