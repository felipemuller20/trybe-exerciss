const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM model_example.books');

  return books.map(({id, title, author_id}) => ({
    id,
    title,
    authorId: author_id
  }))
};

const getByAuthorId = async (id) => {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books WHERE author_id=?',
    [id]
  );

  return books.map(({id, title, author_id}) => ({
    id,
    title,
    authorId: author_id,
  }))
};

const getById = async (id) => {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books WHERE id=?',
    [id],
  );

  return books.map(({id, title, author_id}) => ({
    id,
    title,
    authorId: author_id,
  }))[0];
}

const isValid = async (title, authorId) => {
  if (!title || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number') return false;

  return true;
};

const create = async (title, authorId) => await connection.execute(
'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
[title, authorId],
);

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  isValid,
  create,
};