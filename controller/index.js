const { Todo,User } = require('../models')
const { hasingPassword, comparePassword } = require('../helper/bycrypt')

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
    const hasingPass = hasingPassword(password)
    try {
        await User.create({username,password:hasingPass})
        res.status(201).json(`Success register username ${username}`)
    } catch (err) {
        res.status(400).json(err.errors[0].message)
    }
}

const userLogin = async (req,res,next) => {
    const {username,password} = req.body
    try {
        const founded = await User.findOne({where:{username}})
        const validPass = comparePassword(password,founded.password)
        if(!validPass){
            throw {
                code : 400,
                message : "username or password are wrong"
            }
        }
        res.status(200).json("accessToken")
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    getTodos,
    addTodo,
    registerUser,
    userLogin
}