const routerCards = require('express').Router();
const auth = require('../middlewares/auth');
const cardCheckPermission = require('../middlewares/cardCheckPermission');
const {
  createCard, getCards, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');

routerCards.post('/', auth, createCard);
routerCards.get('/', auth, getCards);
routerCards.delete('/:cardId', auth, cardCheckPermission, deleteCard);
routerCards.put('/:cardId/likes', auth, likeCard);
routerCards.delete('/:cardId/likes', auth, dislikeCard);

module.exports = routerCards;
