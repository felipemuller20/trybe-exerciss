function lowIndice(array) {
  let menor = 0;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] < array[menor]) {
      menor = index;
    }
  }
  return menor;
}

let valores = [50, 10, 11, 5, 7, 158];
console.log(lowIndice(valores));