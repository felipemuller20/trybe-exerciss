let peca;

peca = 'CAVALO';
let pecaAjustada = peca.toLocaleLowerCase();

switch (pecaAjustada) {
  case ('peao'):
    console.log('Move um espaço para a frente, ou dois se for seu primeiro movimento');
  case ('torre'):
    console.log("Move quantas casas desejar, horizontalmente ou verticalmente");
  case ('cavalo'):
    console.log('Anda para qualquer direção em formato de L, sendo 3+1 ou 1+3');
  case ('bispo'):
    console.log('Anda quantas casas desejar, na diagonal');
  case ('rainha'):
    console.log('Anda em qualquer direção quantas casas desejar');
  case ('rei'):
    console.log('Anda em qualquer direção, apenas uma casa');
  default:
    console.log('Não existe');
}