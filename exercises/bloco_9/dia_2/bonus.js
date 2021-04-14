const division = (number) => {
  return [2,3,5,10].map((element) => number / element);
}
const somaArray = (arrayNumbers) => arrayNumbers.reduce((accumulator, number) => accumulator + number);


const sumRandomNumbers = () => {
  const myArray = Array.from(
    {length: 10}, // parametro 1 do array.from
    () => Math.floor(Math.random() * 50) + 1
  );

  const sum = myArray.map((number) => number * number)
  .reduce((accumulator, number) => accumulator + number);

    if (sum >= 8000) {
      throw new Error();
    }
    return sum; //else
};

const fetchPromise = async () => {
  try {
    const sum = await sumRandomNumbers(); //caso chegue aqui, significa que nao deu erro
    const arrayDivisao = await division(sum); // substitui o then
    const somaDoArray = await somaArray(arrayDivisao); //substitui o then
  } catch (error) {
    console.log('É mais de oito mil!!!');
  }
}

fetchPromise();