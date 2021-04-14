
const division = (number) => {
  return [2,3,5,10].map((element) => number / element);
}

const somaArray = (arrayNumbers) => arrayNumbers.reduce((accumulator, number) => accumulator + number);

const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      {length: 10}, // parametro 1 do array.from
      () => Math.floor(Math.random() * 50) + 1
    );

    const sum = myArray.map((number) => number * number)
    .reduce((accumulator, number) => accumulator + number);

    sum > 8000 ? resolve(sum) : reject(sum);

  });


  myPromise
  .then((result) => division(result)) // se refere ao resolve(sum)
  .then((array) => console.log(somaArray(array))) //recebe o retorno do then anterior
  .catch((result) => console.log('É mais de oito mil! Essa promise deve estar quebrada!')); // se refere ao reject(sum)
}

fetchPromise();