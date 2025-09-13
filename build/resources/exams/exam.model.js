export class ExamModel {
    id;
    abiturientId;
    teacherId;
    subject;
    date;
    score;
    constructor({ id, abiturientId, teacherId, subject, date, score }) {
        this.id = id;
        this.abiturientId = abiturientId;
        this.teacherId = teacherId;
        this.subject = subject;
        this.date = date;
        this.score = score;
    }
}
//# sourceMappingURL=exam.model.js.map