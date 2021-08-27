const fs = require('fs').promises;

const getSimpson = async (id) => {
  try {
    const result = await fs.readFile('./simpsons.json');
    const simpsons = JSON.parse(result);
      simpsons.map(character => {
        if (Number(character.id) === id) console.log(character.name)
      })
  } catch (error) {
    console.log(error)
  }
}

getSimpson(3);

