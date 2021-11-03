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
};

const getByEmail = async (email) => {
  const db = await connection();
  const userData = await db.collection('users').findOne({ email });
  return userData;
};

const create = async (userData) => {
  const db = await connection();
  const createResponse = await db.collection('users').insertOne(userData);
  return {
    id: createResponse.insertedId,
    name: userData.name,
    lastname: userData.lastname,
  };
};

module.exports = {
  getAll,
  getById,
  create,
  getByEmail,
};