const abiturients = [];
export function findAll() {
    return abiturients;
}
export function findById(id) {
    return abiturients.find(abiturient => abiturient.id === id) || null;
}
export function create(abiturientData) {
    const newAbiturient = {
        id: Date.now().toString(),
        ...abiturientData
    };
    abiturients.push(newAbiturient);
    return newAbiturient;
}
export function update(id, abiturientData) {
    const index = abiturients.findIndex(abiturient => abiturient.id === id);
    if (index === -1)
        return null;
    const currentAbiturient = abiturients[index];
    const updatedAbiturient = {
        id: currentAbiturient.id,
        firstName: abiturientData.firstName ?? currentAbiturient.firstName,
        lastName: abiturientData.lastName ?? currentAbiturient.lastName,
        numCertificate: abiturientData.numCertificate ?? currentAbiturient.numCertificate
    };
    abiturients[index] = updatedAbiturient;
    return updatedAbiturient;
}
export function remove(id) {
    const index = abiturients.findIndex(abiturient => abiturient.id === id);
    if (index === -1)
        return false;
    abiturients.splice(index, 1);
    return true;
}
//# sourceMappingURL=abiturient.memory.repository.js.map