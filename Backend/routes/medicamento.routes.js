const express = require("express")
const router = express.Router();
const { crearMedicamento, mostrarMedicamentos, mostrarMedicamentosPorNombre, actualizarMedicamento, eliminarMedicamento} = require("../controllers/medicamentoController.js")

router.post('/', crearMedicamento)
router.get('/', mostrarMedicamentos)
router.get('/:nombre', mostrarMedicamentosPorNombre)
router.patch('/:id', actualizarMedicamento)
router.delete('/:id', eliminarMedicamento)


module.exports = router