const routerCards = require('express').Router();
const cardCheckPermission = require('../middlewares/cardCheckPermission');
const {
  createCard, getCards, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');
const { validCreateCard, validGetCard } = require('../middlewares/cardDataValidation');

routerCards.post('/', validCreateCard, createCard);
routerCards.get('/', getCards);
routerCards.delete('/:cardId', validGetCard, cardCheckPermission, deleteCard);
routerCards.put('/:cardId/likes', validGetCard, likeCard);
routerCards.delete('/:cardId/likes', validGetCard, dislikeCard);

module.exports = routerCards;
