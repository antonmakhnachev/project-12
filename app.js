const express = require('express');
const mongoose = require('mongoose');

const { PORT = 3000 } = process.env;

const app = express();

const bodyParser = require('body-parser');

const routerUsers = require('./routes/users.js');
const routerCards = require('./routes/cards.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});


app.use((req, res, next) => {
  req.user = {
    _id: '5ea4a7f6467c104d5286e8a1',
  };

  next();
});

app.use('/users', routerUsers);
app.use('/cards', routerCards);

app.use((req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});


app.listen(PORT, () => {
  console.log(`Port ${PORT}`);
});
