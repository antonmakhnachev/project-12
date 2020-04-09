// const routerGetUsers = require('express').Router();
const fsPromises = require('fs').promises;
// const { users } = require('../data/users.json');
const path = require('path');

const sendUsersData = (req, res) => {
  const usersDataPath = path.join(__dirname, '../data/users.json');
  fsPromises.readFile(usersDataPath, { encoding: 'utf8' })
    .then((usersData) => {
      res.send(JSON.parse(usersData));
      // res.send(req.query);
    })

    .catch((err) => {
      res.send(`error ${err}`);
      console.log(err);
    });
};

module.exports = sendUsersData;