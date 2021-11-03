const connection = require('./connection');

const getAll = async () => {
  const db = await connection();
  const users = await db.collection('users').find({}).toArray();
  return { users };
};

module.exports = {
  getAll,
};