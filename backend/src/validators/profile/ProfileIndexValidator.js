const { Segments, Joi } = require('celebrate');

const profileIndexValidator = {
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown()
}

module.exports = profileIndexValidator
