const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const Book = require('./models/Book');

app.use(bodyParser.json());

app.get('/books', async (req, res) => {
  const { id } = req.query;

   const books = (id) ? await Book.getByAuthorId(id)
    : await Book.getAll();


  if (!books || books.length === 0) return res.json({message: 'Nenhum livro encontrado'})
  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.getById(id);
  if (!book) return res.status(400).json({message: 'Book not found'});
  res.status(200).json(book);
})

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  
  if (!await Book.isValid(title, author_id)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }
  
  await Book.create(title, author_id);
  
  res.status(201).json({ message: 'Livro criado com sucesso! '});
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});