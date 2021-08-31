const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const fs = require('fs');

const getSimpsons = async () => {
  const result = await fs.readFile('./simpsons.json');
  return JSON.parse(result);
}

const setSimpsons = async (newSimpson) => {
  const result = await fs.writeFile('./simpsons.json', JSON.stringify(newSimpson));
  return result;
}

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' })
})

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.json({message: `Hello, ${name}`});
})


app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (parseInt(age) <= 17) return res.status(401).json({message: "Unauthorized"})
  res.status(200).json({message: `Hello, ${name}`})
})

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.json({message: `Seu nome é ${name} e você tem ${age} anos de idade`})
})

app.get('/simpsons', rescue( async (req, res) => {
  const simpsons = await getSimpsons();
  res.json(simpsons)
}));

app.get('/simpsons/:id',  rescue( async (req, res) => {
  const { id } = req.params;
  const simpsons = await getSimpsons();

  const searchSimpson = simpsons.find((simpson) => simpson.id === parseInt(id));
  if (!searchSimpson) return res.json({message: 'simpson not found'});
  res.json(searchSimpson);
}))

app.post('/simpson', rescue( async (req, res) => {
  const { id, name } = req.body;
  const simpsons = await getSimpsons();
  const searchSimpson = simpsons.find((simpson) => simpson.id === parseInt(id));
  if (searchSimpson) return res.status(400).json({message: 'id already exists'});

  simpsons.push({ id, name })
  await setSimpsons(simpsons);
  res.status(204).end();
}))

app.listen(3000);