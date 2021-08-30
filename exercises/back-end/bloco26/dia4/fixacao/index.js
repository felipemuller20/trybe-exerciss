const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', (req, res) => {
  res.json(drinks);
})

app.get('/drinks/search', (req, res) => {
  const { name } = req.query;
  const filterName = drinks.filter((drink) => drink.name.includes(name));
  res.status(200).json(filterName);
})

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((drin) => drin.id === parseInt(id))

  if (!drink) return res.status(404).json({message: "Drink not found!"});
  res.json(drink);
});


app.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.json({message: 'Drink added successfully!'})
})

app.put('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const drinkIndex = drinks.findIndex((drink) => drink.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Bebida nao encontrada!' });
  
  drinks[drinkIndex] === { ...recipes[recipeIndex], name, price } // drink[recipe] recebe tudo q tem nele mas altera o name e price
  res.end(); // end nao retorna nenhuma mensagem
})


app.listen('3000', () => {console.log('Lendo na porta 3000')})