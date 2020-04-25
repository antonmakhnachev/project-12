const routerUsers = require('express').Router();
const {
  createUser, getUsers, deleteUser, getUser, updateProfile, updateProfileAvatar,
} = require('../controllers/users');

routerUsers.post('/', createUser);
routerUsers.get('/:userId', getUser);
routerUsers.get('/', getUsers);
routerUsers.delete('/:userId', deleteUser);
routerUsers.patch('/me', updateProfile);
routerUsers.patch('/me/avatar', updateProfileAvatar);

module.exports = routerUsers;
