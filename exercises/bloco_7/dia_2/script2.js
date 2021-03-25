const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const newKey = (obj, key, value) => obj[key] = value;

newKey(lesson2, 'turno', 'manhã');
console.log(lesson2);

const showKeys = (obj) => Object.keys(obj);
console.log(showKeys(lesson1));

const showLength = (obj) => Object.keys(obj).length;
console.log(`O tamanho do objeto lesson3 é ${showLength(lesson3)}`);

const showValues = (obj) => Object.values(obj);
console.log(`Os valores do objeto lesson2 são: ${showValues(lesson2)}`);

// const allLessons = {
//   lesson1: {},
//   lesson2: {},
//   lesson3: {},
// };

// Object.assign(allLessons.lesson1, lesson1);
// Object.assign(allLessons.lesson2, lesson2);
// Object.assign(allLessons.lesson3, lesson3);
// console.log(allLessons);

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

const students = (obj) => {
  let total = 0;
  const array = Object.keys(obj); // array[0] = lesson1, array[1] = lesson2...
  for (let index = 0; index < array.length; index += 1) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
}
console.log(students(allLessons));

const getValueByNumber = (obj, position) => Object.values(obj)[position];
console.log(getValueByNumber(lesson1, 2));

const verifyPair = (obj, key, value) => {
  const pairs = Object.entries(obj);
  const test = [key, value];
  for (let index = 0; index < pairs.length; index += 1) {
    if (pairs[index][0] === key && pairs[index][1] === value) {
      return true;
    }
  }
  return false;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
