const { celebrate, Joi } = require('celebrate');

module.exports.validCreateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
    avatar: Joi.string().required().regex(/^(https?:\/\/)?([\w.]+)\.([a-z]{2,6}\.?)(\/[\w.]*)*\/?$/),
    email: Joi.string().required().regex(/^([a-z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z.]{2,6})$/),
    password: Joi.string().required().min(8),
  }),
});

module.exports.validGetUser = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().required().length(24),
  }),
});

module.exports.validUpdateProfile = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(8),
    about: Joi.string().required().min(2).max(30),
  }),
});

module.exports.validUpdateProfileAvatar = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().regex(/^(https?:\/\/)?([\w.]+)\.([a-z]{2,6}\.?)(\/[\w.]*)*\/?$/),
  }),
});

module.exports.validLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().regex(/^([a-z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z.]{2,6})$/),
    password: Joi.string().required().min(8),
  }),
});
