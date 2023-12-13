// Función para verificar el comando y devolver un objeto con la información relevante
function getInputData(line) {
  // Divide la línea en palabras
  const words = line.split(" ");

  // Verifica el primer elemento para determinar el comando
  const command = words[0];

  // Objeto para almacenar la información de la linea del documento
  const inputData = {
    command: "",
    name: words[1],
    dayOfWeek: words[2],
    startTime: words[3],
    endTime: words[4],
    classroom: words[5],
  };

  // Validación del formato adecuado
  if (command === "Student") {
    inputData.command = "Student";
  } else if (command === "Presence") {
    inputData.command = "Presence";
  } else {
    console.log("No se pudo extraer los datos, entrada no válida");
  }

  return inputData;
}

module.exports = {
  getInputData,
};
