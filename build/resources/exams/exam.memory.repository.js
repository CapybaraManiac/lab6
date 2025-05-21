const exams = [];
export function findAll() {
    return exams;
}
export function findById(id) {
    return exams.find(exam => exam.id === id) || null;
}
export function findByAbiturientId(abiturientId) {
    return exams.filter(exam => exam.abiturientId === abiturientId);
}
export function findByTeacherId(teacherId) {
    return exams.filter(exam => exam.teacherId === teacherId);
}
export function create(examData) {
    const newExam = {
        id: Date.now().toString(),
        ...examData
    };
    exams.push(newExam);
    return newExam;
}
export function update(id, examData) {
    const index = exams.findIndex(exam => exam.id === id);
    if (index === -1)
        return null;
    const currentExam = exams[index];
    const updatedExam = {
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
export function remove(id) {
    const index = exams.findIndex(exam => exam.id === id);
    if (index === -1)
        return false;
    exams.splice(index, 1);
    return true;
}
export function removeByAbiturientId(abiturientId) {
    const index = exams.findIndex(exam => exam.abiturientId === abiturientId);
    if (index !== -1) {
        exams.splice(index, 1);
    }
}
export function removeByTeacherId(teacherId) {
    const index = exams.findIndex(exam => exam.teacherId === teacherId);
    if (index !== -1) {
        exams.splice(index, 1);
    }
}
//# sourceMappingURL=exam.memory.repository.js.map