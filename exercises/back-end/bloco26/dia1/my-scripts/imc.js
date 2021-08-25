const calculaImc = (peso, altura) => peso / (altura**2)
const { questionInt, questionFloat } = require('readline-sync');

const peso = questionInt('Qual seu peso? ');
const altura = questionFloat('Qual sua altura? ');

const imc = calculaImc(peso, altura);
if (imc < 18.5) console.log(`Seu IMC é ${imc} você está abaixo do peso)`);
if (imc >= 18.5 && imc <= 24.9) console.log(`Seu IMC é ${imc} você está peso normal)`);
if (imc >= 25 && imc <= 29.9) console.log(`Seu IMC é ${imc} você está com sobrepeso)`);
if (imc >= 30 && imc <= 34.9) console.log(`Seu IMC é ${imc} você está com obesidade grau I)`);
if (imc >= 35 && imc <= 39.9) console.log(`Seu IMC é ${imc} você está com obesidade grau II)`);
if (imc >= 40) console.log(`Seu IMC é ${imc} você está com obesidade grau III)`);
