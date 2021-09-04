const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  const db = await connection();
  const books = await db.collection('books').find().toArray();

  return books.map(({ _id, title, author_id}) => ({
    id: _id,
    title,
    authorId: author_id,
  }))
};

const getByAuthorId = async (id) => {
  const db = await connection();
  const books = await db.collection('books').find({ author_id: Number(id) }).toArray();

  return books.map(({ _id, title, author_id}) => ({
    id: _id,
    title,
    authorId: author_id,
  }))
};

const getById = async (id) => {
  const db = await connection();
  const book = await db.collection('books').findOne(new ObjectId(id));

  if (!book) return null;
  const { _id, title, author_id } = book;
  return {
    id: _id,
    title,
    authorId: author_id
  }
}

const isValid = async (title, authorId) => {
  if (!title || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number') return false;

  return true;
};

const create = async (bookTitle, authorId) => {
  const db = await connection();
  const book = await db.collection('books').insertOne({ title: bookTitle, author_id: authorId });
  const { insertedId, title, author_id } = book;
  return {
    id: insertedId,
    title,
    authorId: author_id
  }
}

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  isValid,
  create,
};