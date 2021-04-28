function somatorio(num) {
  let result = 0;
  for (let index = 1; index <= num; index += 1) {
    result += index;
  }
  return result;
}

let valor = 10;
console.log(somatorio(valor));