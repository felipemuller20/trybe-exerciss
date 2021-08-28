const { expect } = require('chai');
const verificaNumero = require('../verificaNumero');

describe('1. Executa a função verificaNumero', () => {
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

  describe('Quando o valor informado não é um número', () => {
    const result = verificaNumero('teste');
    it('Retorna uma string', () => {
      expect(result).to.be.a('string');
    });
    it('Retorna a mensagem "o valor deve ser um número"', () => {
      expect(result).to.be.equal('o valor deve ser um número');
    })
  })
});