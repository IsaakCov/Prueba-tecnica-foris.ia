// Función que recibe un archivo para leer el archivo, formatearlo en un array donde cada fila sea un elemento y devolver la lista
const fs = require('fs');

// Función para leer el archivo y devolver las líneas en un array
function readFile(inputFile) {
  return new Promise((resolve, reject) => {
    fs.readFile(inputFile, 'utf8', (err, data) => {
      if (err) {
        reject(`Error al leer el archivo: ${err.message}`);
      }

      // Divide el contenido en líneas y elimina líneas vacías
      const lines = data.split('\n').filter(line => line.trim() !== '');

      resolve(lines);
    });
  });
}

module.exports = {
  readFile
};