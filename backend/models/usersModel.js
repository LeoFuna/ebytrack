const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAll = async () => {
  const db = await connection();
  const users = await db.collection('users').find({}).toArray();
  return { users };
};

const getById = async (id) => {
  const db = await connection();
  const userData = await db.collection('users').findOne({ _id: ObjectId(id) });
  return userData;
}

module.exports = {
  getAll,
  getById,
};