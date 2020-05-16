const routerUsers = require('express').Router();
const auth = require('../middlewares/auth');
const {
  getUsers, getUser, updateProfile, updateProfileAvatar,
} = require('../controllers/users');
const { validGetUser, validUpdateProfile, validUpdateProfileAvatar } = require('../middlewares/userDataValidation');

routerUsers.get('/:userId', auth, validGetUser, getUser);
routerUsers.get('/', auth, getUsers);
routerUsers.patch('/me', auth, validUpdateProfile, updateProfile);
routerUsers.patch('/me/avatar', auth, validUpdateProfileAvatar, updateProfileAvatar);

module.exports = routerUsers;
