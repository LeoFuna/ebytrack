const Model = require('../models/usersModel');
const { 
  verifyIfEmailIsRegistered, 
  validateRequiredUserDataForCreate, 
  validateEmail, validatePassword } = require('../schemas/usersSchema');

const getAllUsers = async () => {
  const users = await Model.getAll();
  return users;
};

const getById = async (id) => {
  const userData = await Model.getById(id);
  return userData;
};

const loginUser = async (email, password) => {
  if (!validateEmail(email) || !validatePassword(password)) {
    return { err: { 
      code: 401,
      message: 'dados válidos, tente novamente',
    } };
  }
  const userData = await Model.getByEmail(email);
  if (!userData || userData.password !== password) {
    return { err: { code: 401, message: 'email ou senha incorretos' } };
  }
  return userData;
};

const createUser = async (name, lastname, email, password) => {
  if (!validateRequiredUserDataForCreate(name, lastname, email, password)) {
    return { err: { code: 400, message: 'dados inválidos, tente novamente' } };
  }
  if (await verifyIfEmailIsRegistered(email)) {
    return { err: { code: 401, message: 'esse email já possui registro.' } };
  }
  const createResponse = await Model.create({ name, lastname, email, password });
  return createResponse;
};

module.exports = {
  getAllUsers,
  getById,
  createUser,
  loginUser,
};