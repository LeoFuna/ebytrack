const Users = require('../services/usersService');

const getAllUsers = async (_req, res) => {
  const users = await Users.getAllUsers();
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const userData = await Users.getById(id);
  res.status(200).json(userData);
}

module.exports = {
  getAllUsers,
  getUserById,
};