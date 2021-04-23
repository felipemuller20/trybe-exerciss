
const { test, expect } = require('@jest/globals');
const service = require('./exercicio1');

test('testando se a função foi chamada', () => {
  service.generateRandom = jest.fn().mockReturnValue(10);

  expect(typeof(service.generateRandom)).toBe('function');
  expect(service.generateRandom()).toBe(10);
  expect(service.generateRandom).toHaveBeenCalled();
  expect(service.generateRandom).toHaveBeenCalledTimes(1);
});