const routerCards = require('express').Router();
const auth = require('../middlewares/auth');
const cardAvailable = require('../middlewares/card-available');
const {
  createCard, getCards, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');

routerCards.post('/', auth, createCard);
routerCards.get('/', auth, getCards);
routerCards.delete('/:cardId', auth, cardAvailable, deleteCard);
routerCards.put('/:cardId/likes', auth, likeCard);
routerCards.delete('/:cardId/likes', auth, dislikeCard);

module.exports = routerCards;
