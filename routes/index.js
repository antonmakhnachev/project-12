const routes = require('express').Router();
const routerUsers = require('./users');
const routerCards = require('./cards');
const { createUser, login } = require('../controllers/users');
const checkingUseEmail = require('../middlewares/checkingUseEmail');
const { validCreateUser, validLogin } = require('../middlewares/userDataValidation');

routes.post('/signup', validCreateUser, checkingUseEmail, createUser);
routes.post('/signin', validLogin, login);
routes.use('/users', routerUsers);
routes.use('/cards', routerCards);

module.exports = routes;
