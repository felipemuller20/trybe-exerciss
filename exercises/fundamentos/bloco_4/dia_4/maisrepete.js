function mostAppearance(array) {
  let maisAparece = 0;
  let contagemMaior = 0;

  for (index = 0; index < array.length; index += 1) {
    let contagemProximo = 0;
    for (let jndex = 0; jndex < array.length; jndex += 1) {
      if (array[index] === array[jndex]) {
        contagemProximo += 1;
      }
      if (contagemProximo > contagemMaior) {
        contagemMaior = contagemProximo;
        maisAparece = array[index];
      }
    }
  }
  return maisAparece;
}

let valores = [2, 3, 2, 5, 8, 2, 3, 5, 5, 5, 5, 5, 5, 5];
console.log(mostAppearance(valores));