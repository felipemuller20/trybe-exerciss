const assert = require('assert');
// escreva a função sumAllNumbers aqui

const sumAllNumbers = num => {
  let result = 0;
  for (let index = 0; index < num.length; index += 1) {
    result += num[index];
  }
  return result;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);

