const fs = require('fs').promises;

const getSimpsons = async () => {

  try {
    const result = await fs.readFile('./simpsons.json');
    const simpsons = JSON.parse(result);
    simpsons.map(result => console.log(`${result.id} - ${result.name}`));
    
  } catch (error) {
    console.log(error)
  }
}

getSimpsons();

