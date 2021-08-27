const fs = require('fs').promises;

async function arrayToFile() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  const createFilePromises = strings.map((string, index) =>
  fs.writeFile(`./file${index + 1}.txt`, string)
  ); // CRIA UM ARRAY DE PROMISES

  await Promise.all(createFilePromises);

  // O QUE ESTÁ ACIMA CRIOU VARIOS ARQUIVOS, UM PARA CADA ELEMENTO DO ARRAY

  // DAQUI PRA BAIXO IRÁ CRIAR O NOVO ARQUIVO, UM ARQUIVO QUE POSSUI A JUNÇÃO DE TODOS OS OUTROS

  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

  const fileContents = await Promise.all(
    fileNames.map((fileName) => fs.readFile(fileName, 'utf-8'))
  ); // PEGA TODOS OS ARQUIVOS E OS COLOCA NUM ARRAY, CADA POSIÇÃO DO ARRAY É UM ARQUIVO

  const newFileContent = fileContents.join(' '); // TRANSFORMA O ARRAY EM UMA STRING

  await fs.writeFile('./fileAll.txt', newFileContent); // CRIA UM ARQUIVO NOVO, COM O VALOR DE TODOS ELES
}

arrayToFile();