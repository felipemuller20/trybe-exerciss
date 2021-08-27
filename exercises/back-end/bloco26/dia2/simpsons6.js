const fs = require('fs').promises;

const nelsonForMaggie = async () => {
  const result = await fs.readFile('./SimpsonsFamily.json');
  const simpsons = JSON.parse(result);

  const newFamily = simpsons.filter(simp => simp.name !== "Nelson Muntz");
  newFamily.push({ id: '8', name: 'Maggie Simpson' });
  await fs.writeFile('./SimpsonsFamily.json', JSON.stringify(newFamily));
}

nelsonForMaggie();