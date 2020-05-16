const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../config');
const UnathorizedError = require('../errors/unathorizedError');

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    // return Promise.reject(new UnathorizedError('Необходима авторизация'));
    res.status(401).send({ message: 'Необходима авторизация' });
    return;
  }

  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET_KEY);
    if (!payload) {
      throw new UnathorizedError('Необходима авторизация');
    }
  } catch (err) {
    // next(err);
    // Promise.reject(new unathorizedError('Необходима авторизация'));
    res.status(401).send({ message: 'Необходима авторизация' });
    return;
  }

  req.user = payload;

  next();
};
