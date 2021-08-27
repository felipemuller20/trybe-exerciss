const fs = require('fs').promises;

const excluiSimpsons = async () => {
  const result = await fs.readFile('./simpsons.json');
  const simpsons = JSON.parse(result);

  const excluiSimpsons = simpsons.filter(simp => simp.id !== '10' && simp.id !== '6')
  await fs.writeFile('./simpsons.json', JSON.stringify(excluiSimpsons))
}

excluiSimpsons();

