const Users = require('../models/usersModel');
const { verifyIfEmailIsRegistered } = require('../schemas/usersSchema');

const getAllUsers = async () => {
  const users = await  Users.getAll();
  return users;
};

const getById = async (id) => {
  const userData = await Users.getById(id);
  return userData;
};

const createUser = async (name, lastname, email, password) => {
  if (await verifyIfEmailIsRegistered(email)) return { err: { code: 401, message: 'Esse email já possui registro.' } };
  const createResponse = await Users.create({ name, lastname, email, password });
  return createResponse;
}

module.exports = {
  getAllUsers,
  getById,
  createUser,
}