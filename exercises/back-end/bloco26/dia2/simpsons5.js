const fs = require('fs').promises;

const setNelson = async () => {
  const result = await fs.readFile('./SimpsonsFamily.json');
  const simpsons = JSON.parse(result);

  simpsons.push({ "id": "8","name": "Nelson Muntz" });

  await fs.writeFile('./SimpsonsFamily.json', JSON.stringify(simpsons))
}

setNelson();