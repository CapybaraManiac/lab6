const teachers = [];
export function findAll() {
    return teachers;
}
export function findById(id) {
    return teachers.find(teacher => teacher.id === id) || null;
}
export function create(teacherData) {
    const newTeacher = {
        id: Date.now().toString(),
        ...teacherData
    };
    teachers.push(newTeacher);
    return newTeacher;
}
export function update(id, teacherData) {
    const index = teachers.findIndex(teacher => teacher.id === id);
    if (index === -1)
        return null;
    const currentTeacher = teachers[index];
    const updatedTeacher = {
        id: currentTeacher.id,
        firstName: teacherData.firstName ?? currentTeacher.firstName,
        lastName: teacherData.lastName ?? currentTeacher.lastName,
        degree: teacherData.degree ?? currentTeacher.degree
    };
    teachers[index] = updatedTeacher;
    return updatedTeacher;
}
export function remove(id) {
    const index = teachers.findIndex(teacher => teacher.id === id);
    if (index === -1)
        return false;
    teachers.splice(index, 1);
    return true;
}
//# sourceMappingURL=teacher.memory.repository.js.map