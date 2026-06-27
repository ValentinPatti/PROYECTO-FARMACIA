const medicamentoModel = require('../models/medicamentoModel.js')

const crearMedicamento = async (req,res)=>{
    try {
        const medicamento = req.body

        await medicamentoModel.crear(medicamento)

        res.status(201).json({mensaje: 'El medicamento fue creado correctamente'})
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje: 'Ocurrio un error al intentar crear el medicamento'})
    }
}

const mostrarMedicamentos = async (req,res) =>{
    try {
        const medicamentos = await medicamentoModel.obtenerTodos()

        res.status(200).json(medicamentos)
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje: 'Ocurrio un error al intentar buscar los medicamentos'})
    }
}

const mostrarMedicamentosPorNombre = async (req,res)=>{
    try {
        const nombre = req.params.nombre
        const medicamento = await medicamentoModel.obtenerMedicamentoPorNombre(nombre)
        res.status(200).json(medicamento)
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje: 'Ocurrio un error al intentar buscar el medicamento'})
    }
}

module.exports = {crearMedicamento, mostrarMedicamentos, mostrarMedicamentosPorNombre}

