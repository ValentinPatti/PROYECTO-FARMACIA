const express = require("express")
const indexRouter = express.Router();
const rutaMedicamento = require('./medicamento.routes.js')

indexRouter.use('/medicamentos', rutaMedicamento)

module.exports = indexRouter