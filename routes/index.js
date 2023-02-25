const { Router } = require('express')
const routesCharacter = require('./character')

const routes = new Router();

routes.use('/character', routesCharacter)


module.exports = routes;
