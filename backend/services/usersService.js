const Users = require('../models/usersModel');

const getAllUsers = async () => {
  const users = await  Users.getAll();
  return users;
};

const getById = async (id) => {
  const userData = await Users.getById();
  return userData;
};

const createUser = async (name, lastname, email, password) => {
  const createResponse = await Users.create({ name, lastname, email, password });
  return createResponse;
}

module.exports = {
  getAllUsers,
  getById,
  createUser,
}