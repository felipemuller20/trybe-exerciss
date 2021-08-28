const fs = require('fs');

const leArquivo = (nomeDoArquivo) => {
  try {
    const result = fs.readFileSync(nomeDoArquivo);
    return (result);
  } catch (err) {
    return null;
  }
}

module.exports = leArquivo;