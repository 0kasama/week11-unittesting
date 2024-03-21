const express = require('express')
const routes = express.Router()
const todoRouter = require('./todoRoute.js')

routes.use('/todolist', todoRouter)

module.exports = routes