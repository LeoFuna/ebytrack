const { getByEmail } = require("../models/usersModel");


const verifyIfEmailIsRegistered = async (email) => {
  const searchByemailResponse = await getByEmail(email);
  console.log(searchByemailResponse);
};

module.exports = {
  verifyIfEmailIsRegistered,
};
