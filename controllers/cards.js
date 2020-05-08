const Card = require('../models/card');
const NotFoundError = require('../errors/notFoundError');

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  const owner = req.user._id;

  Card.create({ name, link, owner })
    .then((card) => res.send({ data: card }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((card) => res.send({ data: card }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.deleteCard = (req, res) => {
  const { cardId } = req.params;

  Card.findByIdAndRemove(cardId)
    .then((card) => res.send({ message: 'Карточка удалена', data: card }))
    .catch((err) => res.status(err.statusCode || 500).send({ message: 'Произошла ошибка', err: err.message }));
};

module.exports.likeCard = (req, res) => {
  const userId = req.user._id;
  const { cardId } = req.params;

  Card.findByIdAndUpdate(cardId, { $addToSet: { likes: userId } }, { new: true })
    .orFail(() => new NotFoundError('Карточка не найдена'))
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(err.statusCode || 500).send({ message: 'Произошла ошибка', err: err.message }));
};

module.exports.dislikeCard = (req, res) => {
  const userId = req.user._id;
  const { cardId } = req.params;

  Card.findByIdAndUpdate(cardId, { $pull: { likes: userId } }, { new: true })
    .orFail(() => new NotFoundError('Карточка не найдена'))
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(err.statusCode || 500).send({ message: 'Произошла ошибка', err: err.message }));
};
