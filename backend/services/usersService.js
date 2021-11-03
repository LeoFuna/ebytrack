const Model = require('../models/usersModel');
const { verifyIfEmailIsRegistered, validateRequiredUserDataForCreate } = require('../schemas/usersSchema');

const getAllUsers = async () => {
  const users = await  Model.getAll();
  return users;
};

const getById = async (id) => {
  const userData = await Model.getById(id);
  return userData;
};

const createUser = async (name, lastname, email, password) => {
  if (!validateRequiredUserDataForCreate(name, lastname, email, password)) {
    return { err: { code: 400, message: 'Dados inválidos, tente novamente' } };
  };
  if (await verifyIfEmailIsRegistered(email)) return { err: { code: 401, message: 'Esse email já possui registro.' } };
  const createResponse = await Model.create({ name, lastname, email, password });
  return createResponse;
}

module.exports = {
  getAllUsers,
  getById,
  createUser,
}