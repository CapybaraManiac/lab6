export interface Exam {
  id: string;
  abiturientId: string | null;
  teacherId: string | null;
  subject: string;
  date: string;
  score: number;
}

export class ExamModel implements Exam {
  id: string;
  abiturientId: string | null;
  teacherId: string | null;
  subject: string;
  date: string;
  score: number;

  constructor({ id, abiturientId, teacherId, subject, date, score }: Exam) {
    this.id = id;
    this.abiturientId = abiturientId;
    this.teacherId = teacherId;
    this.subject = subject;
    this.date = date;
    this.score = score;
  }
} 