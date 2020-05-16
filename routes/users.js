const routerUsers = require('express').Router();
const {
  getUsers, getUser, updateProfile, updateProfileAvatar,
} = require('../controllers/users');
const { validGetUser, validUpdateProfile, validUpdateProfileAvatar } = require('../middlewares/userDataValidation');

routerUsers.get('/:userId', validGetUser, getUser);
routerUsers.get('/', getUsers);
routerUsers.patch('/me', validUpdateProfile, updateProfile);
routerUsers.patch('/me/avatar', validUpdateProfileAvatar, updateProfileAvatar);

module.exports = routerUsers;
