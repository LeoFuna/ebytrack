const jwt = require('jsonwebtoken');
const Service = require('../services/usersService');

const secret = 'minhasenhasupersecreta';

const getAllUsers = async (_req, res) => {
  const users = await Service.getAllUsers();
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const userData = await Service.getById(id);
  return res.status(200).json(userData);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const loginResponse = await Service.loginUser(email, password);
  if (loginResponse.err) {
    return res.status(loginResponse.err.code).json({ message: loginResponse.err.message });
  }
  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };
  const { _id } = loginResponse;
  const token = jwt.sign({ id: _id, email }, secret, jwtConfig);
  return res.status(200).json({ token });
};

const createUser = async (req, res) => {
  const { name, lastname, email, password } = req.body;
  const createResponse = await Service.createUser(name, lastname, email, password);
  if (createResponse.err) { // Esse ponto precisa ser rafatorado futuramente para o tratamento correto de erros
    return res.status(200).json({ 
      error: createResponse.err.code,
      message: createResponse.err.message,
    });
  }
  return res.status(201).json(createResponse);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  loginUser,
};