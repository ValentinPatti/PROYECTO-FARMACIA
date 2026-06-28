const express = require("express");
const router = express.Router();

const ventasController = require("../controllers/ventasController.js");


router.post("/", ventasController.crearVenta);
router.get("/", ventasController.mostrarVentas);
router.get("/completa/:id", ventasController.mostrarVentas);
router.get("/:id", ventasController.mostrarVentaPorId);
router.patch("/:id", ventasController.actualizarVenta);
router.delete("/:id", ventasController.eliminarVenta);

module.exports = router;