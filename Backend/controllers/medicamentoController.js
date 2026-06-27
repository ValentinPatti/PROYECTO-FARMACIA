const prueba = (req,res)=>{

    res.json({
        mensaje: 'Bienvenido a nuestro backend'
    })
}

module.exports = prueba

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