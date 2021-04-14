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
  .then((result) => console.log(`Promise resolvida, valor da soma: ${result}`)) // se refere ao resolve(sum)
  .catch((result) => console.log(`Promise rejeitada, valor da soma: ${result}`)); // se refere ao reject(sum)
}

fetchPromise();