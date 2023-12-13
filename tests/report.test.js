const { generateReport } = require('../utils/generateReport');

test('Generar informe para estudiantes con minutos presentes', () => {
  const studentsList = [
    { name: 'Rigoberto', totalMinutesPresent: 120, quantityOfDaysAssisted: 2 },
    { name: 'Alfonso', totalMinutesPresent: 90, quantityOfDaysAssisted: 1 },
    { name: 'Charlie', totalMinutesPresent: 180, quantityOfDaysAssisted: 3 },
  ];

  // Mock nos sirve para capturar los console.log de la salida
  const mockLog = jest.spyOn(console, 'log').mockImplementation(() => {});

  generateReport(studentsList);

  // Comprueba la salida esperada
  expect(mockLog).toHaveBeenCalledWith('Charlie: 180 minutes in 3 days');
  expect(mockLog).toHaveBeenCalledWith('Rigoberto: 120 minutes in 2 days');
  expect(mockLog).toHaveBeenCalledWith('Alfonso: 90 minutes in 1 day');

  // Restaura la implementación original de console.log
  mockLog.mockRestore();
});

test('Generar informe para estudiantes sin minutos presentes', () => {
  const studentsList = [
    { name: 'Rigoberto', totalMinutesPresent: 0, quantityOfDaysAssisted: 0 },
    { name: 'Alfonso', totalMinutesPresent: 0, quantityOfDaysAssisted: 0 },
    { name: 'Charlie', totalMinutesPresent: 0, quantityOfDaysAssisted: 0 },
  ];

  const mockLog = jest.spyOn(console, 'log').mockImplementation(() => {});

  generateReport(studentsList);


  expect(mockLog).toHaveBeenCalledWith('Rigoberto: 0 minutes');
  expect(mockLog).toHaveBeenCalledWith('Alfonso: 0 minutes');
  expect(mockLog).toHaveBeenCalledWith('Charlie: 0 minutes');


  mockLog.mockRestore();
});

test('Generar informe para estudiantes con algunos sin minutos presentes', () => {
  const studentsList = [
    { name: 'Rigoberto', totalMinutesPresent: 120, quantityOfDaysAssisted: 2 },
    { name: 'Alfonso', totalMinutesPresent: 0, quantityOfDaysAssisted: 0 },
    { name: 'Charlie', totalMinutesPresent: 180, quantityOfDaysAssisted: 3 },
  ];

  const mockLog = jest.spyOn(console, 'log').mockImplementation(() => {});

  generateReport(studentsList);

  expect(mockLog).toHaveBeenCalledWith('Charlie: 180 minutes in 3 days');
  expect(mockLog).toHaveBeenCalledWith('Rigoberto: 120 minutes in 2 days');
  expect(mockLog).toHaveBeenCalledWith('Alfonso: 0 minutes');

  mockLog.mockRestore();
});