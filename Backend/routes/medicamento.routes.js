const express = require("express")
const router = express.Router();
const { crearMedicamento, mostrarMedicamentos, mostrarMedicamentosPorNombre, actualizarMedicamento} = require("../controllers/medicamentoController.js")

router.post('/', crearMedicamento)
router.get('/', mostrarMedicamentos)
router.get('/:nombre', mostrarMedicamentosPorNombre)
router.patch('/:id', actualizarMedicamento)


module.exports = router