const express = require("express")
const app = express()
const router = require('../routes/users')
const routerF = require('../routes/fruits')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/users', router)
app.use('/fruits', routerF)
module.exports = app;