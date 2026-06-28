const express = require("express")
const indexRouter = express.Router();
const rutaMedicamento = require('./medicamento.routes.js')
const rutaProveedor = require("./proveedor.routes.js");
const rutaCliente = require("./cliente.routes.js");

indexRouter.use('/medicamentos', rutaMedicamento)
indexRouter.use("/proveedores", rutaProveedor);
indexRouter.use("/clientes", rutaCliente);
module.exports = indexRouter