const Users = require('../services/usersService');

const getAllUsers = async (_req, res) => {
  const users = await Users.getAllUsers();
  return res.status(200).json(users);
};

module.exports = {
  getAllUsers,
};