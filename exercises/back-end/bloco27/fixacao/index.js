const express = require('express');

// const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();

/* ... */

app.get('/books', async (req, res) => {
  const books = await Book.getAll();
  if (!books || books.length === 0) return res.json({message: 'Nenhum livro encontrado'})
  res.status(200).json(books);
});

/* ... */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});