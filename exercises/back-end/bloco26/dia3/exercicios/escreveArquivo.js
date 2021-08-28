const fs = require('fs')

const escreveArquivo = (nomeArquivo, conteudoArquivo) => {
  fs.writeFileSync(`${__dirname}/${nomeArquivo}`, conteudoArquivo);

  return 'ok';
};

module.exports = (escreveArquivo);
