const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui

  const sumGrades = (accumulator, grade) => accumulator + grade;
  const calcAverage = (index) => grades[index].reduce(sumGrades, 0) / grades[index].length;

  return students.reduce((accumulator, student, index) => {
    const object = {
      name: student,
      average: calcAverage(index),
    };
    accumulator.push(object);
    return accumulator;

  },[]);
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);