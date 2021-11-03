const { getByEmail } = require("../models/usersModel");
const Joi = require('joi');


const verifyIfEmailIsRegistered = async (email) => {
  const searchByemailResponse = await getByEmail(email);
  return searchByemailResponse;
};

const validateRequiredUserDataForCreate = (name, lastname, email, password) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    lastname: Joi.string().min(3).required(),
    email: Joi.string().lowercase().email({
      minDomainSegments: 2
    }).required(),
    password: Joi.string().alphanum().min(6).required(),
  });
  const validationResponse = schema.validate({ name, lastname, email, password });
  if (validationResponse.error) return false;
  return true;
};

module.exports = {
  verifyIfEmailIsRegistered,
  validateRequiredUserDataForCreate,
};
