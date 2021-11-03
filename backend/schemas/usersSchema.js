const { getByEmail } = require("../models/usersModel");


const verifyIfEmailIsRegistered = async (email) => {
  const searchByemailResponse = await getByEmail(email);
  return searchByemailResponse;
};

module.exports = {
  verifyIfEmailIsRegistered,
};
