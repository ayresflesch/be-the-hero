const { Segments, Joi } = require('celebrate');

const incidentsIndexValidator = {
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}
module.exports = incidentsIndexValidator
