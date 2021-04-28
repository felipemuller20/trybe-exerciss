let custo = 50;
let qtdVenda = 1000;


let imposto = 20/100;

let valorCustoTotal = (custo*imposto) + custo;

let valorVenda = (valorCustoTotal + (valorCustoTotal*40/100));



let lucroTotal = (valorVenda*qtdVenda)-(valorCustoTotal*qtdVenda);

if ((custo || venda) <= 0) {
  console.log('erro nos valores informados')
} else {
console.log(lucroTotal);
}

