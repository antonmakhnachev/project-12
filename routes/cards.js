const fsPromises = require('fs').promises;
const path = require('path');

const sendCardsData = (req, res) => {
  const cardsDataPath = path.join(__dirname, '../data/cards.json');
  fsPromises.readFile(cardsDataPath, { encoding: 'utf8' })
    .then((cardsData) => {
      res.send(cardsData);
    })

    .catch((err) => {
      res.send(`error ${err}`);
      console.log(err);
    });
};

module.exports = sendCardsData;