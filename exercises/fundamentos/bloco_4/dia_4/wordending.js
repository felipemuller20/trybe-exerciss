function complete(word, ending) {
  let wordLength = word.length;
  let endingLength = ending.length;
  let igual = 0;

  for (let index = 0; index < ending.length; index += 1) {
    if (word[wordLength] === ending[endingLength]) {
      wordLength -= 1;
      endingLength -= 1;
      igual += 1;
    }
  }
  if (igual === ending.length) {
    return true;
  } else {
    return false;
  }
}

let palavra = 'trybe';
let fim = 'ybe';

console.log(complete(palavra, fim));