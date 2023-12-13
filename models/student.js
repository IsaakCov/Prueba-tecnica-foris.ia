// Clase para representar a un estudiante
class Student {
  constructor(name) {
    this.name = name;
    this.quantityOfDaysAssisted = 0;
    this.daysAssisted = [];
    this.totalMinutesPresent = 0;
  }

  // Método para actualizar los días asistidos
  updateDaysAssisted(day) {
    if (!this.daysAssisted.includes(day)) {
      console.log(day)
      this.daysAssisted.push(day);
      this.quantityOfDaysAssisted = this.daysAssisted.length;
    }
  }

  // Método para actualizar el tiempo total presente
  updateTotalMinutesPresent(minutes) {
    this.totalMinutesPresent += minutes;
  }
}

module.exports = Student;
