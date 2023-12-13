// Una funcion que actualiza los datos del json de un estudiante buscando las coincidencias por el nombre
// recibe la lista de objetos, hora inicio, hora final y dia

// Busca al estudiante en la lista

// Verifica que la hora de final no sea menor a la de inicio

// Verifica que el tiempo de final menos el de inicio sea mayor a 4 minutos

// Si el dia asistido no se encuentra en la lista assistedDays, se agrega a la lista

// Si se cumple, actualiza los campos, donde quantityOfDaysAssisted es el tamaño de assistedDays y totalMinutesInClass es el calculo en
// minutos entre la hora inicial y la final.

// Función para registrar la asistencia de un estudiante y actualizar los atributos correspondientes
function registerAttendance(inputData, studentsList) {
  // Encuentra al estudiante en la lista (asumiendo que el nombre es único)
  const student = studentsList.find(
    (student) => student.name == inputData.name
  );

  if (student) {
    // Actualiza los días asistidos y el tiempo total presente del estudiante
    
    const startTime = parseTime(inputData.startTime);
    const endTime = parseTime(inputData.endTime);
    const minutesPresent = calculateMinutesPresent(startTime, endTime);
    if (minutesPresent >= 5) {
      student.updateTotalMinutesPresent(minutesPresent);
      student.updateDaysAssisted(inputData.day);
    }
  }
}

// Función para analizar el tiempo en formato HH:MM
function parseTime(timeString) {
  if (timeString) {
    const [hours, minutes] = timeString.split(":").map(Number);
    return { hours, minutes };
  } else {
    // Manejo del caso en el que timeString es undefined
    console.error("Error: timeString is undefined.");
    return { hours: 0, minutes: 0 }; // O proporciona valores predeterminados según tu lógica
  }
}

// Función para calcular la duración en minutos entre dos tiempos
function calculateMinutesPresent(startTime, endTime) {
  const startMinutes = startTime.hours * 60 + startTime.minutes;
  const endMinutes = endTime.hours * 60 + endTime.minutes;
  return endMinutes - startMinutes;
}

module.exports = {
  registerAttendance
};
