const sorteio = (aposta, action) => {
  const luckyNumber = Math.floor(Math.random() * 5) + 1;
  console.log(`Aposta: ${aposta}
Sorteado: ${luckyNumber}`);
  return action(aposta, luckyNumber) ? `Parabéns, você acertou!` : `Tente novamente!`;
}

const verificaNum = (apostado, sorteado) => {
  if (apostado === sorteado) {
    return true;
  }
  return false;
}

console.log(sorteio(5, verificaNum));
