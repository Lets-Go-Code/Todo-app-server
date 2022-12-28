const route = require('express').Router()
const { 
    getTodos,
    addTodo,
    registerUser 
} = require('../controller')

route.get('/', getTodos)
route.post('/addTodo', addTodo)

route.post('/register', registerUser)

module.exports = route