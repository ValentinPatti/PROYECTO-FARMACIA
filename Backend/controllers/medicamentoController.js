const medicamentoModel = require('../models/medicamentoModel.js')

const crearMedicamento = async (req,res)=>{
    try {
        const medicamento = req.body

        await medicamentoModel.crear(medicamento)
        
        res.status(201).json({mensaje: 'El servicio fue creado correctamente'})
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje: 'Ocurrio un error al intentar crear el servicio'})
    }
}

module.exports = {crearMedicamento}

// const Medicamento = require("../models/medicamentoModel");

// const listarMedicamento = async (req, res) => {
//     try {
//         const medicamentos =
//         await Medicamento.obtenerMedicamentos();

//         res.json(medicamentos);
//     } catch (error) {
//         res.status(500).json({
//             mensaje: "Error al obtener medicamentos",
//             error: error.message
//         })
//     }
// } 

// module.exports = {
//     listarMedicamento
// };