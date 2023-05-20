const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');
const form = require('../controller/form_controller');

route.get('/', services.homeRoutes)

route.get('/about_qwerty', services.aboutRoutes)

route.get('/activities', services.activitiesRoutes)

route.get('/team', services.teamRoutes)

route.get('/contact', services.contactRoutes)

route.get('/register', services.formRoutes)

//API
route.post('/contact', controller.create)

route.post('/register', form.create)

module.exports = route