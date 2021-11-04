const jwt = require('jsonwebtoken');

const secret = 'minhasenhasupersecreta';

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(200).json({ error: 401, message: 'erro na autenticação do token' });
  try {
    const { id, email } = jwt.verify(token, secret);
    const userInfo = { id, email };
    req.body = { ...req.body, userInfo };
    next();
  } catch (err) {
    return res.status(200).json({ error: 401, message: 'token inválido' });
  }
};

module.exports = auth;
