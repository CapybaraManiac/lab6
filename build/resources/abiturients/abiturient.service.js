import { findAll, findById, create, update, remove } from './abiturient.memory.repository.js';
import { findByAbiturientId, removeByAbiturientId } from '../exams/exam.memory.repository.js';
export async function getAbiturients() {
    return findAll();
}
export async function getAbiturientById(id) {
    return findById(id);
}
export async function getAbiturientExams(id) {
    return findByAbiturientId(id);
}
export async function createAbiturient(abiturientData) {
    return create(abiturientData);
}
export async function updateAbiturient(id, abiturientData) {
    return update(id, abiturientData);
}
export async function deleteAbiturient(id) {
    const success = remove(id);
    if (success) {
        removeByAbiturientId(id);
    }
    return success;
}
//# sourceMappingURL=abiturient.service.js.map