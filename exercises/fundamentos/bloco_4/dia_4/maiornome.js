function biggestName(names) {
  let maior = 0;
  for (let index = 1; index < names.length; index += 1) {
    if (names[index].length > names[maior].length) {
      maior = index;
    }
  }
  return names[maior];
}

let names = ['Eustacio', 'Felipe', 'Lucas', 'Camila', 'Ernany', 'Orlandomar'];
console.log(biggestName(names));