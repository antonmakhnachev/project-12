const User = require('../models/user');

module.exports.createUser = (req, res) => {
  const {
    name, about, avatar, email, password,
  } = req.body;

  User.create({
    name, about, avatar, email, password,
  })
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.getUser = (req, res) => {
  const { userId } = req.params;

  User.findById(userId)
    .orFail()
    .then((user) => res.send({ data: user }))
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

module.exports.deleteUser = (req, res) => {
  const { userId } = req.params;

  User.findByIdAndRemove(userId)
    .orFail()
    .then((user) => res.send({ data: user }))
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

module.exports.updateProfile = (req, res) => {
  const userId = req.user._id;
  const { name, about } = req.body;

  User.findByIdAndUpdate(userId, { name, about }, { new: true, runValidators: true })
    .then((user) => res.send({ newData: user }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.updateProfileAvatar = (req, res) => {
  const userId = req.user._id;
  const { avatar } = req.body;

  User.findByIdAndUpdate(userId, { avatar }, { new: true, runValidators: true })
    .then((user) => res.send({ newAvatar: user }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};
