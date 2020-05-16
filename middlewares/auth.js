const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../config');
const UnathorizedError = require('../errors/unathorizedError');

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    throw new UnathorizedError('Необходима авторизация');
  }

  const payload = jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      throw new UnathorizedError('Необходима авторизация');
    }

    return decoded;
  });

  req.user = payload;

  next();
};
