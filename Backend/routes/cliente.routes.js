const express = require("express");
const router = express.Router();

const clienteController = require("../controllers/clientesController.js");
router.use(verificacionToken)

router.post("/", clienteController.crearCliente);
router.get("/", clienteController.mostrarClientes);
router.get("/buscar/:dni", clienteController.mostrarClientePorDni);
router.patch("/:id", clienteController.actualizarCliente);
router.delete("/:id", clienteController.eliminarCliente);

module.exports = router;