const { TestScheduler } = require("jest");
const service = require("./exercicio2");

jest.mock("./exercicio2");

test('Testando upper com lowecase', () => {
  service.turnUpper.mockImplementation((string) => string.toLowerCase());

  service.turnUpper('TESTE');
  expect(service.turnUpper).toHaveBeenCalled();
  expect(service.turnUpper('TESTE')).toBe('teste');
});