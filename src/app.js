const express = require("express")
const app = express()
const router = require('../routes/users')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/users', router)

module.exports = app;