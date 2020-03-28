const { Segments, Joi } = require('celebrate');

const incidentsDeleteValidator = {
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}
module.exports = incidentsDeleteValidator
