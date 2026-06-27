const express = require("express")
const router = express.Router();
const { crearMedicamento} = require("../controllers/medicamentoController.js")

router.post('/', crearMedicamento)


module.exports = router