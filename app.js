const express = require("express")
const app = express()
const port = 3001
const route = require('./routes/index')

app.use(route)

app.listen(port,_ => {
    console.log("App running on port " + port)
})