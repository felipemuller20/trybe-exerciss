
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const countAs = (accumulator, letter) => letter === 'a' || letter === 'A' ? accumulator + 1 : accumulator;

  return names.reduce((accumulator, name) => accumulator + name.split('').reduce(countAs, 0), 0);
}

assert.deepStrictEqual(containsA(), 20);