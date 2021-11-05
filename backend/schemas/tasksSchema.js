const Joi = require('joi');

const validateDescription = (description) => {
  const schema = Joi.object({
    description: Joi.string().min(3).alphanum().required(),
  });
  const validationResponse = schema.validate({ description });
  if (validationResponse.error) return false;
  return true;
};

const validateCreated = (created) => {
  const schema = Joi.object({
    created: Joi.string().min(3).required(),
  });
  const validationResponse = schema.validate({ created });
  if (validationResponse.error) return false;
  return true;
};

module.exports = {
  validateDescription,
  validateCreated,
};
