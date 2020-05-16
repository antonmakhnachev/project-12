const regexUrl = new RegExp(/^(https?:\/\/)?([\w.]+)\.([a-z]{2,6}\.?)(\/[\w.]*)*\/?$/);
const { celebrate, Joi } = require('celebrate');


module.exports.validCreateCard = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().regex(regexUrl),
  }),
});

module.exports.validDeleteCard = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().length(24),
  }),
});

module.exports.validLikeCard = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().length(24),
  }),
});

module.exports.validDislikeCard = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().length(24),
  }),
});
