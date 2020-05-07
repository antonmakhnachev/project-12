const Card = require('../models/card');

module.exports = (req, res, next) => {
  const { cardId } = req.params;

  Card.findById(cardId)
    .then((card) => {
      if (!card) {
        res.status(404).send({ massege: 'Карточка не найдена' });
        return;
      }
      if (!card.owner.equals(req.user._id)) {
        res.status(403).send({ message: 'Недостаточно прав' });
        return;
      }
      next();
    })
    .catch((err) => {
      let status = 500;
      let message = 'Произошла ошибка';
      if (err.name === 'CastError' || err.name === 'DocumentNotFoundError') {
        status = 404;
        message = 'Карточка не найдена';
      }
      res.status(status).send({ message });
    });
};
