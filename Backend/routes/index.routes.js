const express = require("express")
const indexRouter = express.Router();
const rutaMedicamento = require('./medicamento.routes.js')
const rutaProveedor = require("./proveedor.routes.js");

indexRouter.use('/medicamentos', rutaMedicamento)
indexRouter.use("/proveedores", rutaProveedor);

module.exports = indexRouter