const express = require("express");
const router = express.Router();

const compraController = require("../controllers/comprasController.js");
router.use(verificacionToken)
router.post("/", compraController.crearCompra);
router.get("/", compraController.mostrarCompras);
router.get("/:id", compraController.mostrarCompraPorId);
router.patch("/:id", compraController.actualizarCompra);
router.delete("/:id", compraController.eliminarCompra);

module.exports = router;