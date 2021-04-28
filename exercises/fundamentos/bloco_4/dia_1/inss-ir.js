let salarioBruto = 3000;
let salarioDescontado;
let salarioLiquido;

let inss;
let ir;

if (salarioBruto <= 1556.94) {
  salarioDescontado = salarioBruto -(salarioBruto*8/100);
} else if (salarioBruto <= 2594.92) {
  salarioDescontado = salarioBruto -(salarioBruto*9/100);
} else if (salarioBruto <= 5189.82) {
  salarioDescontado = salarioBruto -(salarioBruto*11/100);
} else {
  salarioDescontado = salarioBruto - 570.88;
}

if (salarioDescontado <= 1903.98) {
  salarioLiquido = salarioDescontado;
} else if (salarioDescontado <= 2826.65) {
  salarioLiquido = salarioDescontado - ((salarioDescontado*7.5/100) - 142.8);
} else if (salarioDescontado <= 3751.05) {
  salarioLiquido = salarioDescontado - ((salarioDescontado*15/100) - 354.8);
} else if (salarioDescontado <= 4664.68) {
  salarioLiquido = salarioDescontado - ((salarioDescontado*22.5/100) - 636.13);
} else {
  salarioLiquido = salarioDescontado - ((salarioDescontado*27.5/100) - 869.36);
}

if (salarioBruto >= 0) {
  console.log(salarioLiquido);
} else {
  console.log('Valor informado é invalido');
}