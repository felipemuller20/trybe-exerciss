let a = 2;
let b = 3;
let c = 7;

//Adição
console.log(a + b);
//Subtração
console.log(a - b);
//Multiplicação
console.log(a * b);
//Divisão
console.log(a / b);
//Módulo 
console.log(a % b);

//Retorna o maior numero entre 2
if (a > b) {
  console.log(a);
} else {
  console.log(b);
}
//Retorna o maior numero entre 3
if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else if (c > a && c > b) {
  console.log(c);
} else {
  console.log("Há números iguais");
}
//Retorna positivo ou negativo
if (a > 0) {
  console.log("Positivo");
} else if (a < 0) {
  console.log("Negativo");
} else {
  console.log("zero");
}
