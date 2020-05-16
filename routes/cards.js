const routerCards = require('express').Router();
const auth = require('../middlewares/auth');
const cardCheckPermission = require('../middlewares/cardCheckPermission');
const {
  createCard, getCards, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');
const {
  validCreateCard, validDeleteCard, validLikeCard, validDislikeCard,
} = require('../middlewares/cardDataValidation');

routerCards.post('/', auth, validCreateCard, createCard);
routerCards.get('/', auth, getCards);
routerCards.delete('/:cardId', auth, validDeleteCard, cardCheckPermission, deleteCard);
routerCards.put('/:cardId/likes', auth, validLikeCard, likeCard);
routerCards.delete('/:cardId/likes', auth, validDislikeCard, dislikeCard);

module.exports = routerCards;
