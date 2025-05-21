import { Exam } from './exam.model.js';

const exams: Exam[] = [];

export function findAll(): Exam[] {
  return exams;
}

export function findById(id: string): Exam | null {
  return exams.find(exam => exam.id === id) || null;
}

export function findByAbiturientId(abiturientId: string): Exam[] {
  return exams.filter(exam => exam.abiturientId === abiturientId);
}

export function findByTeacherId(teacherId: string): Exam[] {
  return exams.filter(exam => exam.teacherId === teacherId);
}

export function create(examData: Omit<Exam, 'id'>): Exam {
  const newExam: Exam = {
    id: Date.now().toString(),
    ...examData
  };
  exams.push(newExam);
  return newExam;
}

export function update(id: string, examData: Partial<Omit<Exam, 'id'>>): Exam | null {
  const index = exams.findIndex(exam => exam.id === id);
  if (index === -1) return null;

  const currentExam = exams[index]!;
  const updatedExam: Exam = {
    id: currentExam.id,
    abiturientId: examData.abiturientId ?? currentExam.abiturientId,
    teacherId: examData.teacherId ?? currentExam.teacherId,
    subject: examData.subject ?? currentExam.subject,
    date: examData.date ?? currentExam.date,
    score: examData.score ?? currentExam.score
  };
  
  exams[index] = updatedExam;
  return updatedExam;
}

export function remove(id: string): boolean {
  const index = exams.findIndex(exam => exam.id === id);
  if (index === -1) return false;

  exams.splice(index, 1);
  return true;
}

export function removeByAbiturientId(abiturientId: string): void {
  const index = exams.findIndex(exam => exam.abiturientId === abiturientId);
  if (index !== -1) {
    exams.splice(index, 1);
  }
}

export function removeByTeacherId(teacherId: string): void {
  const index = exams.findIndex(exam => exam.teacherId === teacherId);
  if (index !== -1) {
    exams.splice(index, 1);
  }
} 