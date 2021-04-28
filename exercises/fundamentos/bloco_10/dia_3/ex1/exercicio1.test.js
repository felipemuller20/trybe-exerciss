
const { test, expect } = require('@jest/globals');
const service = require('./exercicio1');

test('testando se a função foi chamada ex1', () => {
  service.generateRandom = jest.fn().mockReturnValue(10);

  expect(typeof(service.generateRandom)).toBe('function');
  expect(service.generateRandom()).toBe(10);
  expect(service.generateRandom).toHaveBeenCalled();
  expect(service.generateRandom).toHaveBeenCalledTimes(1);
});

test('Nova implementação da funcao ex2', () => {
  service.generateRandom = jest.fn().mockImplementation((a, b) => a / b);

  expect(service.generateRandom(1,1)).toBe(1);
  expect(service.generateRandom).toHaveBeenCalledTimes(1);
  expect(service.generateRandom).toHaveBeenCalledWith(1, 1);
  service.generateRandom.mockClear();
});

test('teste implementação ex3', () => {
  service.generateRandom = jest.fn().mockImplementation((num1, num2, num3) => num1 * num2 * num3);

  expect(service.generateRandom(2,3,4)).toBe(24);
  expect(service.generateRandom).toHaveBeenCalled();
  expect(service.generateRandom).toHaveBeenCalledTimes(1);

  service.generateRandom.mockReset();
  expect(service.generateRandom).toHaveBeenCalledTimes(0);

  service.generateRandom = jest.fn().mockImplementation((num) => num * 2);
  expect(service.generateRandom(5)).toBe(10);
  expect(service.generateRandom).toHaveBeenCalledTimes(1);
});
