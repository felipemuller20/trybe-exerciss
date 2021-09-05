const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const Book = require('./controllers/Book');

app.use(bodyParser.json());

app.get('/books', Book.getAll);

app.get('/books/:id', Book.getById)

app.post('/books', Book.create);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});