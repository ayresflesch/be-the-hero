const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const ongCreateValidator = require('./validators/ong/OngCreateValidator')
const profileIndexValidator = require('./validators/profile/ProfileIndexValidator')
const incidentsIndexValidator = require('./validators/incidents/IncidentsIndexValidator')
const incidentsDeleteValidator = require('./validators/incidents/IncidentsDeleteValidator')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', celebrate(ongCreateValidator), OngController.create)

routes.get('/profile', celebrate(profileIndexValidator), ProfileController.index)

routes.get('/incidents', celebrate(incidentsIndexValidator), IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', celebrate(incidentsDeleteValidator), IncidentController.delete)

module.exports = routes