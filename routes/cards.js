const routerCards = require('express').Router();
const cardCheckPermission = require('../middlewares/cardCheckPermission');
const {
  createCard, getCards, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');
const {
  validCreateCard, validDeleteCard, validLikeCard, validDislikeCard,
} = require('../middlewares/cardDataValidation');

routerCards.post('/', validCreateCard, createCard);
routerCards.get('/', getCards);
routerCards.delete('/:cardId', validDeleteCard, cardCheckPermission, deleteCard);
routerCards.put('/:cardId/likes', validLikeCard, likeCard);
routerCards.delete('/:cardId/likes', validDislikeCard, dislikeCard);

module.exports = routerCards;
