const express = require("express")
const router = express.Router();
const { crearMedicamento, mostrarMedicamentos, mostrarMedicamentosPorNombre} = require("../controllers/medicamentoController.js")

router.post('/', crearMedicamento)
router.get('/', mostrarMedicamentos)
router.get('/:nombre', mostrarMedicamentosPorNombre)


module.exports = router