const express = require ("express");
const router = express.Router();

const medicamentoController =
    require("../controllers/medicamentoController");

    router.get(
        "/",
        medicamentoController.listarMedicamento
    );

    module.exports = router