let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercicio 1

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

//exercicio 2

// let soma = 0;
// for (let i = 0; i < numbers.length; i++) {
//   soma=soma+numbers[i];
// }
// console.log(soma);

//exercicio 3 e 4

// let soma = 0;
// for (let i = 0; i < numbers.length; i++) {
//   soma=soma+numbers[i];
// }
// console.log(soma / numbers.length);

// if ((soma/numbers.length) > 20) {
//   console.log('valor maior que 20')
// } else {
//   console.log('Valor menor ou igual a 20');
// }

//exercicio 5

// let maior=numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] >= maior) {
//     maior = numbers[i];
//   }
// }
// console.log(maior);

//exercicio 6

// let impar = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if ((numbers[i] % 2) != 0) {
//     impar++;
//   }
// }

// if (impar > 0) {
//   console.log(impar)
// } else {
//   console.log('nenhum valor impar encontrado')
// }

//exercicio 7

// let menor = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//   if (menor > numbers[i]) {
//     menor = numbers[i];  
//   }
// }

// console.log(menor);

//exercicio 8 e 9

let array = [];

for (let i = 0; i < 25; i++) {
  array[i] = (i+1);
}

console.log(array);

for (i = 0; i< array.length; i++) {
  console.log(array[i] / 2);
}