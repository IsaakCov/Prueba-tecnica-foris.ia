// Una funcion que recibe datos del estudiante y una lista, crea el json con los datos del estudiante y añade ese objeto a la lista
// devuelve la lista actualizada.
const Student = require("../models/student");

function createStudentRecord(studentData, studentsList) {
  // Crea una nueva instancia de la clase Student
  const newStudent = new Student(studentData.name.trim()); // Limpiar el nombre para evitar errores

  // Añade el nuevo objeto a la lista de estudiantes
  studentsList.push(newStudent);

  // Devuelve la lista actualizada
  return studentsList;
}

module.exports = {
  createStudentRecord,
};
