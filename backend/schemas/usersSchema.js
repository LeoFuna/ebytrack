const Joi = require('joi');
const { getByEmail } = require('../models/usersModel');

const verifyIfEmailIsRegistered = async (email) => {
  const searchByemailResponse = await getByEmail(email);
  return searchByemailResponse;
};

const validateRequiredUserDataForCreate = (name, lastname, email, password) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    lastname: Joi.string().min(3).required(),
    email: Joi.string().lowercase().email({
      minDomainSegments: 2,
    }).required(),
    password: Joi.string().alphanum().min(6).required(),
  });
  const validationResponse = schema.validate({ name, lastname, email, password });
  if (validationResponse.error) return false;
  return true;
};

const validateEmail = (email) => {
  const schema = Joi.object({
    email: Joi.string().lowercase().email({
      minDomainSegments: 2,
    }).required(),
  });
  const validationResponse = schema.validate({ email });
  if (validationResponse.error) return false;
  return true;
};

const validatePassword = (password) => {
  const schema = Joi.object({
    password: Joi.string().alphanum().min(6).required(),
  });
  const validationResponse = schema.validate({ password });
  if (validationResponse.error) return false;
  return true;
};

module.exports = {
  verifyIfEmailIsRegistered,
  validateRequiredUserDataForCreate,
  validateEmail,
  validatePassword,
};
