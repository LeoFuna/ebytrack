const Users = require('../models/usersModel');

const getAllUsers = async () => {
  const users = await  Users.getAll();
  return users;
};

const getById = async (id) => {
  const userData = await Users.getById();
  return userData;
}

module.exports = {
  getAllUsers,
  getById,
}