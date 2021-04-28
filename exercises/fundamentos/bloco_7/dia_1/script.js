// const testingScope = (escopo) => {
//   if (escopo === true) {
//     var ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
//     ifScope += `ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     var elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//     console.log(elseScope);
//   }
//   console.log(ifScope + `o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const crescente = (array) => {
  for (let index = 1; index < array.length; index += 1) {
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index] < array[index2]) {
        let aux = array[index];
        array[index] = array[index2];
        array[index2] = aux;
      }
    }
  }
  return array;
}

console.log(`Os números ${crescente(oddsAndEvens)} se encontram ordenados de forma crescente`);