const express = require('express');
const app = express();

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

})

app.listen('3000', () => {console.log('Lendo na porta 3000')})