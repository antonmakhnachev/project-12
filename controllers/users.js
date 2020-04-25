const User = require('../models/user');

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ massege: 'Произошла ошибка' }));
};

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ massege: 'Произошла ошибка' }));
};

module.exports.getUser = (req, res) => {
  const { userId } = req.params;

  User.findById(userId)
    .orFail(() => { throw new Error(); })
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ massege: 'Произошла ошибка' }));
};

module.exports.deleteUser = (req, res) => {
  const { userId } = req.params;

  User.findByIdAndRemove(userId)
    .orFail(() => { throw new Error(); })
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ massege: 'Произошла ошибка' }));
};

module.exports.updateProfile = (req, res) => {
  const userId = req.user._id;
  const { name, about } = req.body;

  User.findByIdAndUpdate(userId, { name: name, about: about }, { new: true, runValidators: true })
    .then((user) => res.send({ newData: user }))
    .catch(() => res.status(500).send({ massege: 'Произошла ошибка' }));

};

module.exports.updateProfileAvatar = (req, res) => {
  const userId = req.user._id;
  const { avatar } = req.body;

  User.findByIdAndUpdate(userId, { avatar: avatar }, { new: true, runValidators: true })
    .then((user) => res.send({ newAvatar: user }))
    .catch(() => res.status(500).send({ massege: 'Произошла ошибка' }));
};
