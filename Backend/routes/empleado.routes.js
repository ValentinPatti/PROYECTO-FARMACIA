const express = require("express");
const router = express.Router();

const empleadoController = require("../controllers/empleadoController");


router.post("/", empleadoController.crearEmpleado);
router.get("/", empleadoController.mostrarEmpleados);
router.get("/:dni", empleadoController.mostrarEmpleadoPorDni);
router.patch("/:id", empleadoController.actualizarEmpleado);
router.delete("/:id", empleadoController.eliminarEmpleado);

module.exports = router;