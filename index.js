const { readFile } = require("./utils/readFile");
const { getInputData } = require("./utils/getInputData");
const { createStudentRecord } = require("./utils/createStudentRecord");
const { registerAttendance } = require("./utils/registerAttendance");
const { generateReport } = require("./utils/generateReport");

// Verifica si se proporcionó un nombre de archivo como argumento
const inputFile = process.argv[2];

if (!inputFile) {
  console.error("Por favor, proporciona un nombre de archivo como argumento.");
  process.exit(1);
}

// Llama a la función para leer el archivo y obtener las líneas
readFile(inputFile)
  .then((lines) => {
    // Crea un array para almacenar los datos de los estudiantes
    const studentsData = [];

    // Itera sobre cada línea y procesa los datos
    lines.forEach((line) => {
      // Llama a la función getInputData para determinar la acción a realizar
      const inputData = getInputData(line);

      // Verifica el comando y decide qué acción tomar
      if (inputData.command === "Student") {
        const studentData = createStudentRecord(inputData, studentsData);
        // Si hay datos del estudiante, los añade al array
        if (studentData) {
          studentsData.push(studentData);
        }
      } else if (inputData.command === "Presence") {
        registerAttendance(inputData, studentsData);
      }
    });

    // Llama a la función para generar el informe final
    generateReport(studentsData);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
