// npm init -y
// no package-json, cria o script "start" com "node index.js", para executar o arquivo no npm start
console.log('Hello World');

// Instala o readline-sync com o comando npm i readline-sync

const readline = require('readline-sync'); // similar ao import readline from readline-sync

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');

console.log(`Hello ${name}! You are ${age} years old!`);