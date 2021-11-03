const Users = require('../models/usersModel');

const getAllUsers = async () => {
  const users = await  Users.getAll();
  return users;
};

module.exports = {
  getAllUsers,
}