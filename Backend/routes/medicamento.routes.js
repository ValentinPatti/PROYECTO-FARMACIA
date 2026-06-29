const express = require("express")
const router = express.Router();
const verificacionToken = require('../middlewares/auth.middlewares.js')
const verificarRol = require('../middlewares/rol.middleware.js')

const { crearMedicamento, mostrarMedicamentos, mostrarMedicamentosPorNombre, actualizarMedicamento, eliminarMedicamento, mostrarMedicamentoPorId} = require("../controllers/medicamentoController.js")

router.use(verificacionToken)

router.post('/', verificarRol("administrador"),crearMedicamento)
router.get('/', verificarRol("administrador", "empleado"), mostrarMedicamentos)
router.get("/id/:id", verificarRol("administrador", "empleado"), mostrarMedicamentoPorId)
router.get('/:nombre', verificarRol("administrador", "empleado"),mostrarMedicamentosPorNombre)
router.patch('/:id', verificarRol("administrador"),actualizarMedicamento)
router.delete('/:id', verificarRol("administrador"),eliminarMedicamento)


module.exports = router