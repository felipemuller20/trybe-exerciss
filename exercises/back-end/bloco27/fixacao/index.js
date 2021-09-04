const express = require('express');

const Book = require('./models/Book');

const app = express();

app.get('/books', async (req, res) => {
  const { id } = req.query;

  // let books;
  // if (id) { books = await Book.getByAuthorId(id)}
  // else { books = await Book.getAll() };

   const books = (id) ? await Book.getByAuthorId(id)
    : await Book.getAll();
    
  if (!books || books.length === 0) return res.json({message: 'Nenhum livro encontrado'})
  res.status(200).json(books);
});

// app.get('/books/:id', async (req, res) => {
//   const { id } = req.params;
//   const book = await Book.getByAuthorId(id);
//   console.log(book);

//   if (!book) return res.status(400).json({message: 'ID inexistente'});
//   res.status(200).json(book);
// })

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});