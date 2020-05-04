const User = require('../models/user');

module.exports = (req, res, next) => {
  const { userId } = req.params;

  User.findById(userId)
    .then((user) => {
      if (!user) {
        res.status(404).send({ massege: 'Пользователь не найден' });
        return;
      }

      next();
    })
    .catch((err) => {
      let status = 500;
      let message = 'Произошла ошибка';
      if (err.name === 'CastError' || err.name === 'DocumentNotFoundError') {
        status = 404;
        message = 'Пользователь не найден';
      }
      res.status(status).send({ message });
    });
};
