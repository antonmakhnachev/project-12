const routerUsers = require('express').Router();

const usersData = require('../data/users.json');

routerUsers.get('/', (req, res) => {
  res.send(usersData);
});

routerUsers.get('/:id', (req, res) => {
  const user = usersData.find(user => req.params.id === user._id);
  if (user) {
    res.send(user);
  } else {
    res.status(400).send({ message: 'Нет пользователя с таким id' });
  }
  res.send(user);
});

module.exports = routerUsers;
