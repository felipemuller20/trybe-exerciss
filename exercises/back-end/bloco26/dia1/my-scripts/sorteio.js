const letsPlay = () => {
  const rand = (Math.floor(Math.random() * 11));
  
  const { questionInt, question } = require('readline-sync');
  
  const number = questionInt('Escolha um número entre 0 e 10! ');
  
  if (number === rand) {
    console.log(`Parabéns, você acertou! O número sorteado foi ${rand}`)
  } else { console.log(`Que pena, você errou! O número sorteado foi ${rand}`) }

  const novamente = question('Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) ');
  if (novamente !== 's') return console.log('OK, até a próxima!');

  letsPlay();
};

letsPlay();