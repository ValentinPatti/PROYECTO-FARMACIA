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

const actualizarMedicamento = async(req,res)=>{
    try {
        const id = req.params.id
        const datos = req.body
        await medicamentoModel.actualizarMedicamento(id,datos)
        if(!id){
        return res.status(404).json({mensaje: 'No se encontró un servicio con el id enviado'})
        }
        res.status(200).json({mensaje: "Medicamento actualizado correctamente"})
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje: 'Ocurrio un error al intentar actualizar el medicamento'})
    }
}

const eliminarMedicamento = async(req,res)=>{
    try {
        const id = req.params.id
        await medicamentoModel.eliminarMedicamento(id)
        if(!id){
        return res.status(404).json({mensaje: 'No se encontró un medicamento con el id enviado'})
        }

        res.status(200).json({mensaje: 'Medicamento eliminado exitosamente'})
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje: 'Ocurrio un error al intentar eliminar el medicamento'})
    }
}

module.exports = {crearMedicamento, mostrarMedicamentos, mostrarMedicamentosPorNombre, actualizarMedicamento, eliminarMedicamento}

