const express = require('express');

const { PORT = 3000 } = process.env;


const app = express();
const path = require('path');

const routerUsers = require('./routes/users.js');
const routerCards = require('./routes/cards.js');


app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', routerUsers);
app.use('/cards', routerCards);

app.use((req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`Port ${PORT}`);
});
