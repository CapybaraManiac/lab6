const users = [];
export function findAll() {
    return users;
}
export function findById(id) {
    return users.find(user => user.id === id) || null;
}
export function create(userData) {
    const newUser = {
        id: Date.now().toString(),
        ...userData
    };
    users.push(newUser);
    return newUser;
}
export function update(id, userData) {
    const index = users.findIndex(user => user.id === id);
    if (index === -1)
        return null;
    const currentUser = users[index];
    const updatedUser = {
        id: currentUser.id,
        firstName: userData.firstName ?? currentUser.firstName,
        lastName: userData.lastName ?? currentUser.lastName,
        email: userData.email ?? currentUser.email,
        role: userData.role ?? currentUser.role
    };
    users[index] = updatedUser;
    return updatedUser;
}
export function remove(id) {
    const index = users.findIndex(user => user.id === id);
    if (index === -1)
        return false;
    users.splice(index, 1);
    return true;
}
//# sourceMappingURL=user.memory.repository.js.map