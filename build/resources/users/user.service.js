import { findAll, findById, create, update, remove } from './user.memory.repository.js';
export async function getUsers() {
    return findAll();
}
export async function getUserById(id) {
    return findById(id);
}
export async function createUser(userData) {
    return create(userData);
}
export async function updateUser(id, userData) {
    return update(id, userData);
}
export async function deleteUser(id) {
    return remove(id);
}
//# sourceMappingURL=user.service.js.map