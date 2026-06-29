const express = require("express");
const router = express.Router();

const proveedorController = require("../controllers/proveedorController.js");
router.use(verificacionToken)
router.post("/", proveedorController.crearProveedor);
router.get("/", proveedorController.mostrarProveedores);
router.get("/:nombre", proveedorController.mostrarProveedorPorNombre);
router.patch("/:id", proveedorController.actualizarProveedor);
router.delete("/:id", proveedorController.eliminarProveedor);

module.exports = router;