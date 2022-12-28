const { Todo,User } = require('../models') 

const getTodos = async (req,res,next) => {
    try {
        data = await Todo.findAll()
        res.status(200).json(data)
    } catch (err) {
        res.status(404).json({message:"Data not found"})
    }
}

const addTodo = async (req,res,next) => {
    const {title,description} = req.body
    try {
        await Todo.create({title,description})
        res.status(201).json({message:"Success Add Todo"})
    } catch (err) {
        res.status(400).json({message:"Bad request"})
    }
}

const registerUser = async (req,res,next) => {
    const { username, password } = req.body
    console.log(username,password)
    try {
        const data = await User.findAll()
        res.status(201).json(data)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    getTodos,
    addTodo,
    registerUser
}