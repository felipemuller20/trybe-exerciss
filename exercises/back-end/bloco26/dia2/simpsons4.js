const fs = require('fs').promises;

const createFamily = async () => {
  const result = await fs.readFile('./simpsons.json');
  const simpsons = JSON.parse(result);

  const family = simpsons.filter(simpson => [1, 2, 3, 4].includes(Number(simpson.id)));
  await fs.writeFile('./SimpsonsFamily.json', JSON.stringify(family));
}

createFamily();