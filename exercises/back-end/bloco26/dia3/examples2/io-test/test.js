const { expect } = require('chai');

const leArquivo = require('./leArquivo');
const CONTEUDO_DO_ARQUIVO = 'VQV com TDD'

const fs = require('fs');
const sinon = require('sinon');

describe('leArquivo', () => {
  describe('Quando o arquivo existe', () => {

    before(() => { // utiliza o before e after para ele só ser usado neste describe (e seus filhos)
      sinon.stub(fs, 'readFileSync').returns(CONTEUDO_DO_ARQUIVO); // Quando o teste localizar um readFileSync no programa, irá o que está selecionado aqui
    });
    after(() => {
      fs.readFileSync.restore(); // Retorna o comportamento normal
    });

    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = leArquivo('arquivo.txt'); // Neste momento a leArquivo tenta fazer um readFileSync
                                                  // por cota do sinon, vai retornar o CONTEUDODOARQUIVO
        expect(resposta).to.be.a('string');
      });

      it ('é igual ao conteúdo do arquivo', () => {
        const resposta = leArquivo('arquivo.txt');
        expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
      });
    });
  });

  describe('Quando o arquivo não existe', () => {
    describe('a resposta', () => {
      it('é igual a null', () => {
        const resposta = leArquivo('arquivo_q_nao_existe.txt');
        expect(resposta).to.be.equal(null);
      });
    });
  });
});