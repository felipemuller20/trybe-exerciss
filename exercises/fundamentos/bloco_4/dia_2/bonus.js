
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// exercicio bonus 1

// for (let i = 1; i < numbers.length; i++) {
//   for (let j = 0; j < i; j++) {
//     if (numbers[i] < numbers[j]) {
//       let position = numbers[i];
//       numbers[i] = numbers[j];
//       numbers[j] = position;
//     }
//   }
// }

// console.log(numbers);

// exercicio bonus 2

// for (let index = 1; index < numbers.length; index++) {
//   for (let jndex = 0; jndex < index; jndex++) {
//     if (numbers[index] > numbers[jndex]) {
//       let aux = numbers[index];
//       numbers[index] = numbers [jndex];
//       numbers[jndex] = aux;
//     }
//   }
// }
// console.log(numbers);

let newArray = [];
for (let index = 0; index < numbers.length; index++) {
  if (index == (numbers.length - 1)) {
    newArray.push(numbers[index]*2);
  } else {
    newArray.push(numbers[index] * numbers[index+1]);
  }
}

console.log(newArray);