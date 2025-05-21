import { findAll, findById, create, update, remove } from './exam.memory.repository.js';
import { findById as findTeacherById } from '../teachers/teacher.memory.repository.js';
export async function getExams() {
    return findAll();
}
export async function getExamById(id) {
    return findById(id);
}
export async function getExamTeachers(id) {
    const exam = await findById(id);
    if (!exam || !exam.teacherId)
        return [];
    const teacher = await findTeacherById(exam.teacherId);
    return teacher ? [teacher] : [];
}
export async function createExam(examData) {
    return create(examData);
}
export async function updateExam(id, examData) {
    return update(id, examData);
}
export async function deleteExam(id) {
    return remove(id);
}
//# sourceMappingURL=exam.service.js.map