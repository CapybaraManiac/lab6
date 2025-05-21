import { Teacher } from './teacher.model.js';

const teachers: Teacher[] = [];

export function findAll(): Teacher[] {
  return teachers;
}

export function findById(id: string): Teacher | null {
  return teachers.find(teacher => teacher.id === id) || null;
}

export function create(teacherData: Omit<Teacher, 'id'>): Teacher {
  const newTeacher: Teacher = {
    id: Date.now().toString(),
    ...teacherData
  };
  teachers.push(newTeacher);
  return newTeacher;
}

export function update(id: string, teacherData: Partial<Omit<Teacher, 'id'>>): Teacher | null {
  const index = teachers.findIndex(teacher => teacher.id === id);
  if (index === -1) return null;

  const currentTeacher = teachers[index]!;
  const updatedTeacher: Teacher = {
    id: currentTeacher.id,
    firstName: teacherData.firstName ?? currentTeacher.firstName,
    lastName: teacherData.lastName ?? currentTeacher.lastName,
    degree: teacherData.degree ?? currentTeacher.degree
  };
  
  teachers[index] = updatedTeacher;
  return updatedTeacher;
}

export function remove(id: string): boolean {
  const index = teachers.findIndex(teacher => teacher.id === id);
  if (index === -1) return false;

  teachers.splice(index, 1);
  return true;
} 