const rescue = require('express-rescue');
const service = require('../services/Book');

const getAll = rescue(async (req, res) => {
  const { id } = req.query;

  const books = (id) ? await service.getByAuthorId(id)
  : await Book.getAll();

  if (!books || books.length === 0) return res.json({message: 'Nenhum livro encontrado'})
  res.status(200).json(books);
});

const getById = rescue(async (req, res) => {
  const { id } = req.params;
  const book = await service.getById(id);
  if (!book) return res.status(400).json({message: 'Book not found'});
  res.status(200).json(book);
})

const create = rescue(async (req, res) => {
  const { title, author_id } = req.body;
  
  const book = await service.create(title, author_id);
  if (!book) return res.status(400).json({ message: 'Dados inválidos' });
  
  res.status(201).json({ message: 'Livro criado com sucesso! '});
});

