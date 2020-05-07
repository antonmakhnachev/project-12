const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const UnathorizedError = require('../errors/unathorizedError');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    validate: {
      validator(isLink) {
        return validator.isURL(isLink);
      },
    },
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(isEmail) {
        return validator.isEmail(isEmail);
      },
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
  },
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new UnathorizedError('Неправильные логин или пароль'));
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new UnathorizedError('Неправильные логин или пароль'));
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
