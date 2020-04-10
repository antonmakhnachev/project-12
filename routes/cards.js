const routerCards = require('express').Router();
const cardsData = require('../data/cards.json');

routerCards.get('/', (req, res) => {
  res.send(cardsData);
});

module.exports = routerCards;
