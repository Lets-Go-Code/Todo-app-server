const route = require('express').Router()
const { 
    getTodos,
    addTodo,
    registerUser,
    userLogin
} = require('../controller')

route.get('/', getTodos)
route.post('/addTodo', addTodo)

route.post('/register', registerUser)
route.post('/login', userLogin)

module.exports = route