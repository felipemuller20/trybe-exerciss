const numbers = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    if (typeof(num1) !== 'number'
      || typeof(num2) !== 'number'
        || typeof(num3) !== 'number') reject('Os 3 valores precisam ser numberos');
    const result = (num1 + num2) * num3;

    if (result < 50) {
      return reject('Valor muito baixo');
    }
    resolve(result);
  })
}
// exercicio 1
// numbers(10,010,'c')
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

// numbers(10,10,10)
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

// numbers(1,1,1)
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

//exercicio 2 
// const num1 = Math.floor(Math.random() * 100 + 1);
// const num2 = Math.floor(Math.random() * 100 + 1);
// const num3 = Math.floor(Math.random() * 100 + 1);

//exercicio 2 outra forma
const getRandom = () => Math.floor(Math.random() * 100 + 1);
// const callNumbers = () => {
//   const randomNumbers = Array.from({length: 3}).map(getRandom);
//   numbers(...randomNumbers)
//     .then(result => console.log(result))
//     .catch(error => console.log(error));
// }
const callNumbers = async () => {
  const randomNumbers = Array.from({length: 3}).map(getRandom);
  try {
    const result = await numbers(...randomNumbers);
    console.log(result);
  } catch (error) {
    console.log(error)
  }
}


callNumbers();
