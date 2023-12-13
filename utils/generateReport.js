/* Funcion que recibe la lista de los json de los estudiantes con sus datos y los ordena segun la cantidad de minutos asistidos
   Imprime los registros en este formato: 
   Marco: 142 minutes in 2 days
   David: 104 minutes in 1 day
   Fran: 0 minutes*/

function generateReport(studentsList) {
  // Ordena la lista de estudiantes en orden descendente según los minutos asistidos
  const sortedStudentsList = studentsList.sort(
    (a, b) => b.totalMinutesPresent - a.totalMinutesPresent
  );

  // Imprime los registros en el formato especificado y devuelve la lista ordenada
  sortedStudentsList.forEach((student) => {
    if (student.totalMinutesPresent > 0) {
      console.log(
        `${student.name}: ${student.totalMinutesPresent} minutes in ${student.quantityOfDaysAssisted} days`
      );
    } else if (student.name != undefined) {
      console.log(`${student.name}: ${student.totalMinutesPresent} minutes`);
    }
  });

  return sortedStudentsList;
}

module.exports = {
  generateReport,
};
