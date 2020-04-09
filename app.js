const express = require('express');

const { PORT = 3000 } = process.env;


const app = express();
const path = require('path');

const sendUsersData = require('./routes/users.js');
const sendCardsData = require('./routes/cards.js');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', sendUsersData);
app.use('/cards', sendCardsData);


app.listen(PORT, () => {
  console.log(PORT);
});