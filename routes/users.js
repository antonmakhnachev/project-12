const routerUsers = require('express').Router();
const auth = require('../middlewares/auth');
const userAvailable = require('../middlewares/user-available');
const {
  createUser, getUsers, getUser, updateProfile, updateProfileAvatar, login,
} = require('../controllers/users');


routerUsers.post('/signup', createUser);
routerUsers.post('/signin', login);
routerUsers.get('/:userId', auth, userAvailable, getUser);
routerUsers.get('/', auth, getUsers);
routerUsers.patch('/me', auth, updateProfile);
routerUsers.patch('/me/avatar', auth, updateProfileAvatar);

module.exports = routerUsers;
