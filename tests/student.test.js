const Student = require('../models/student');
const { registerAttendance } = require('../utils/registerAttendance');


/* Nota, este test evalua lo que son la creación de los estudiantes así como su correcta 
   actualización de contenido*/

test('Crear nueva instancia de "Student"', () => {
  const student = new Student('Petra');
  expect(student).toBeInstanceOf(Student);
  expect(student.name).toBe('Petra');
  expect(student.quantityOfDaysAssisted).toBe(0);
  expect(student.daysAssisted).toEqual([]);
  expect(student.totalMinutesPresent).toBe(0);
});

test('Crea "Student" y registra asistencias', () => {
  const studentsList = [];
  const student = new Student('Jarjar');
  studentsList.push(student);
  const inputData = {
    name: 'Jarjar',
    dayOfWeek: '1',
    startTime: '10:00',
    endTime: '12:00',
  };

  registerAttendance(inputData, studentsList);

  expect(student.quantityOfDaysAssisted).toBe(1);
  expect(student.daysAssisted).toContain('1');
  expect(student.totalMinutesPresent).toBe(120);
});

test('Crea "Student" y registra asistencias para varios dias', () => {
  const studentsList = [];
  const student = new Student('Leia');
  studentsList.push(student);
  const inputData1 = {
    name: 'Leia',
    dayOfWeek: '1',
    startTime: '09:00',
    endTime: '11:00',
  };
  const inputData2 = {
    name: 'Leia',
    dayOfWeek: '3',
    startTime: '14:00',
    endTime: '14:02',
  };

  registerAttendance(inputData1, studentsList);
  registerAttendance(inputData2, studentsList);

  expect(student.quantityOfDaysAssisted).toBe(1);
  expect(student.daysAssisted).toEqual(['1']);
  expect(student.totalMinutesPresent).toBe(120);
});