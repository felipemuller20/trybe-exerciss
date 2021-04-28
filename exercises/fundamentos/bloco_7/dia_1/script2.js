//Crie uma função que receba um número e retorne seu fatorial.

// const fatorial = (numero) => {
//   let result = 1;
//   for (let index = 1; index <= numero; index += 1) {
//     result *= index;
//   }
//   return result;
// }

// console.log(fatorial(5));

// const factorial = number => number > 1 ? number * factorial(number - 1) : 1
// console.log(factorial(5))

// const biggestWord = (string) => {
//   const array = string.split(' ');
//   let biggest = array[0];
//   for (let index = 0; index < array.length; index += 1) {
//     if (array[index].length > biggest.length) {
//       biggest = array[index];
//     }
//   }
//   return biggest;
// }

// console.log(biggestWord('Alo meus camaradas'))


const counter = _ => {
  const btn = document.getElementById('btn');
  let clicks = 0
  btn.addEventListener('click', () => {
    clicks += 1;
    document.getElementById('clicks').innerText = clicks;
  });
}
counter();