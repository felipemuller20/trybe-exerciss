const Book = require('../models/Book');

const isValid = async (title, authorId) => {
  if (!title || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number') return false;
  return true;
};

const getAll = async () => await Book.getAll();

const getByAuthorId = async (id) => await Book.getByAuthorId(id);

const getById = async (id) => await Book.getById(id);

const create = async () => {
  const validBook = isValid(title, authorId);
  if (!validBook) return false;

  const { insertedId } = await Book.create(title, authorId);
  return {
    id: insertedId,
    title,
    authorId,
  };
};

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  create,
}