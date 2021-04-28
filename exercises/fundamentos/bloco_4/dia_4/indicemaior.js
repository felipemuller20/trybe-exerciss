function highIndice(array) {
  let maior = 0;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > array[maior]) {
     maior = index;
    }
  }
  return maior;
}

let valores = [5, 10, 7, 11, 39, 58, 0, 144];
console.log(highIndice(valores));