const Card = require('../models/card');
const NotFoundError = require('../errors/notFoundError');

module.exports = (req, res, next) => {
  const { cardId } = req.params;

  Card.findById(cardId)
    .orFail(() => new NotFoundError('Карточка не найдена'))
    .then((card) => {
      if (!card.owner.equals(req.user._id)) {
        res.status(403).send({ message: 'Недостаточно прав' });
        return;
      }
      next();
    })
    .catch((err) => res.status(err.statusCode || 500).send({ message: 'Произошла ошибка', err: err.message }));
};
