const jwt = require('jsonwebtoken');

const secret = 'minhasenhasupersecreta';

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'erro na autenticação do token' });
  try {
    const { id, email } = jwt.verify(token, secret);
    const userInfo = { id, email, role };
    req.body = { ...req.body, userInfo };
    next();
  } catch (err) {
    return res.status(401).json({ message: 'token inválido' });
  }
};

module.exports = auth;
