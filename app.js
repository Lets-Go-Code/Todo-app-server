const express = require("express")
const app = express()
const port = 3001
const route = require('./routes/index')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(route)

app.listen(port,_ => {
    console.log("App running on port " + port)
})