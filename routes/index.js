const routes = require('express').Router();
const routerUsers = require('./users');
const routerCards = require('./cards');
const { createUser, login } = require('../controllers/users');

routes.post('/signup', createUser);
routes.post('/signin', login);
routes.use('/users', routerUsers);
routes.use('/cards', routerCards);

module.exports = routes;
