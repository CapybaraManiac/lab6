export interface Exam {
  id: string;
  subject: string;
  date: string;
  teacherId: string;
}

export class ExamModel implements Exam {
  id: string;

  subject: string;

  date: string;

  teacherId: string;

  constructor({ id, subject, date, teacherId }: Exam) {
    this.id = id;
    this.subject = subject;
    this.date = date;
    this.teacherId = teacherId;
  }
} 