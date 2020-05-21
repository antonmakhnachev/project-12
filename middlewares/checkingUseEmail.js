const User = require('../models/user');
const AlreadyUsedEmailError = require('../errors/alreadyUsedEmailError');

module.exports = (req, res, next) => {
  const { email } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (user) {
        throw new AlreadyUsedEmailError('Пользователь с таким email уже существует');
      }
      next();
    })
    .catch(next);
};
