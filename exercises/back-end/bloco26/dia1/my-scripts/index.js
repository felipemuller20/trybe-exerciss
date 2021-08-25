const readline = require('readline-sync');

// Criamos uma lista dos scripts disponíveis
// Utilizamos objetos com `name` e `script` para facilitar a criação da lista que será exibida
const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
];

// Iteramos sobre os scripts para criar a lista numerada
let mensagem = scripts
  .map((script, index) => `${index + 1} - ${script.name}`);
 
// Adicionamos uma linha a mais no começo da mensagem
mensagem.unshift('Escolha um número para executar o script correspondente');
mensagem = mensagem.join('\n'); // Junta todos os elementos em uma única string, separando-os com uma quebra de linha

const scriptNumber = readline.questionInt(mensagem) - 1; //-1 para pegar o length correto
const script = scripts[scriptNumber];

if (!script) return console.log('Número inválido. Saindo');

// Chamamos o script selecionado
// Note que, no dia a dia, é mais comum utilizarmos outras formas de executar arquivos externos
// No entanto, para fins didáticos, o `require` nos atende por enquanto.
require(script.script); // require('./imc.js');