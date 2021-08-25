const velocidade = (distancia, tempo) => distancia / tempo;

const { questionInt, questionFloat } = require('readline-sync');

const dist = questionFloat('Digite a distância percorrida: ');
const tempo = questionInt('Digite o tempo em segundos: ');

const velMed = velocidade(dist, tempo);
console.log(`A velocidade média é de ${velMed} m/s`);