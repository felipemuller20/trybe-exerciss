const { expect } = require('chai');
const verificaNumero = require('../verificaNumero');

describe('Executa a função verificaNumero', () => {
  describe('Quando o número é maior que 0', () => {
    const result = verificaNumero(10);
    it('Retorna uma string', () => {
      expect(result).to.be.a('string');
    });
    it('Retorna "positivo"', () => {
      expect(result).to.be.equal('positivo');
    });
  });

  describe('Quando o número é menor que 0', () => {
    const result = verificaNumero(-7);
    it('Retorna uma string', () => {
      expect(result).to.be.a('string');
    });
    it('Retorna "negativo"', () => {
      expect(result).to.be.equal('negativo');
    });
  });

  describe('Quando é o número 0', () => {
    const result = verificaNumero(0);
    it('Retorna uma string', () => {
      expect(result).to.be.a('string')
    });
    it('Retorna "neutro"', () => {
      expect(result).to.be.equal('neutro');
    });
  });
});