import { findAll, findById, create, update, remove } from './teacher.memory.repository.js';
import { findByTeacherId, removeByTeacherId } from '../exams/exam.memory.repository.js';
export async function getTeachers() {
    return findAll();
}
export async function getTeacherById(id) {
    return findById(id);
}
export async function getTeacherExams(id) {
    return findByTeacherId(id);
}
export async function createTeacher(teacherData) {
    return create(teacherData);
}
export async function updateTeacher(id, teacherData) {
    return update(id, teacherData);
}
export async function deleteTeacher(id) {
    const success = remove(id);
    if (success) {
        removeByTeacherId(id);
    }
    return success;
}
//# sourceMappingURL=teacher.service.js.map