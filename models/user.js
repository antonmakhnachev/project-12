const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlenght: 2,
    maxlenght: 30,
  },
  about: {
    type: String,
    required: true,
    minlenght: 2,
    maxlenght: 30,
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
});

module.exports = mongoose.model('user', userSchema);
