const Service = require('../services/usersService');

const getAllUsers = async (_req, res) => {
  const users = await Service.getAllUsers();
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const userData = await Service.getById(id);
  return res.status(200).json(userData);
};

const createUser = async (req, res) => {
  const { name, lastname, email, password } = req.body;
  const createResponse = await Service.createUser(name, lastname, email, password);
  if (createResponse.err) return res.status(createResponse.err.code).json({ message: createResponse.err.message })
  return res.status(201).json(createResponse);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  loginUser,
};