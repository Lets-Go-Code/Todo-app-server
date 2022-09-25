const route = require('express').Router()
const { getTodos } = require('../controller')

route.get('/', getTodos)

module.exports = route