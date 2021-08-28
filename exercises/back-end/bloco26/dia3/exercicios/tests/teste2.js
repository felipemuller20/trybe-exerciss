const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const escreveArquivo = require('../escreveArquivo');
const CONTEUDO_ARQUIVO = 'Eu escrevi aqui!';

describe('Executa a função escreveArquivo', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });
  after(() => {
    fs.writeFileSync.restore();
  })
  describe('O retorno da função', () => {
    it('deve ser uma string', () => {
      const result = escreveArquivo('arquivo.txt', 'texto')
      expect(result).to.be.a('string');
    });
    it('deve ser a mensagem "ok"', () => {
      const result = escreveArquivo('arquivo.txt', CONTEUDO_ARQUIVO)
      expect(result).to.be.equal('ok');
    });
  });
});