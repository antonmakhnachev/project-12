require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const { PORT, SERVER_CONNECT } = process.env;

const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const routerUsers = require('./routes/users.js');
const routerCards = require('./routes/cards.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());


mongoose.connect(SERVER_CONNECT, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use('/users', routerUsers);
app.use('/cards', routerCards);

app.use((req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});


app.listen(PORT, () => {
  console.log(`Port ${PORT}`);
});
