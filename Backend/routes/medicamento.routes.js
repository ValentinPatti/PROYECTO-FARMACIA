const express = require("express")
const router = express.Router();
const prueba = require("../controllers/medicamentoController.js")

router.route('/test').get(prueba);

module.exports = router