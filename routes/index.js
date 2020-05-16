const routes = require('express').Router();
const routerUsers = require('./users');
const routerCards = require('./cards');
const { createUser, login } = require('../controllers/users');
const checkingUseEmail = require('../middlewares/checkingUseEmail');

routes.post('/signup', checkingUseEmail, createUser);
routes.post('/signin', login);
routes.use('/users', routerUsers);
routes.use('/cards', routerCards);

module.exports = routes;
