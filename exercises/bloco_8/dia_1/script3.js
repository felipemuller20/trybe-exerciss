// 3 - Utilizando currying

const checaResposta = (gabarito) => (resposta) => gabarito === resposta.toLowerCase();

 // Maneira 1
const gabarito = checaResposta('teste');
const certaResposta = gabarito('TESTE');

console.log(certaResposta);

 // Maneira 2
console.log(checaResposta('essa é a resposta?')('Essa é a resposta?'));