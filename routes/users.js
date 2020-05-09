const routerUsers = require('express').Router();
const auth = require('../middlewares/auth');
const {
  getUsers, getUser, updateProfile, updateProfileAvatar,
} = require('../controllers/users');


// routerUsers.post('/signup', createUser);
// routerUsers.post('/signin', login);
routerUsers.get('/:userId', auth, getUser);
routerUsers.get('/', auth, getUsers);
routerUsers.patch('/me', auth, updateProfile);
routerUsers.patch('/me/avatar', auth, updateProfileAvatar);

module.exports = routerUsers;
