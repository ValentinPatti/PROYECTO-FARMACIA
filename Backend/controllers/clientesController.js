const clienteModel = require("../models/clienteModel.js");


const crearCliente = async (req, res) => {
    try {
        const cliente = req.body;

        await clienteModel.crear(cliente);

        res.status(201).json({
            mensaje: "Cliente creado correctamente"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensaje: "Error al crear cliente"
        });
    }
};


const mostrarClientes = async (req, res) => {
    try {
        const clientes = await clienteModel.obtenerTodos();

        res.status(200).json(clientes);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensaje: "Error al obtener clientes"
        });
    }
};


const mostrarClientePorDni = async (req, res) => {
    try {
        const dni = req.params.dni;

        const cliente = await clienteModel.obtenerClientePorDni(dni);

        res.status(200).json(cliente);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensaje: "Error al buscar cliente"
        });
    }
};


const actualizarCliente = async (req, res) => {
    try {
        const id = req.params.id;
        const datos = req.body;

        await clienteModel.actualizarCliente(id, datos);

        res.status(200).json({
            mensaje: "Cliente actualizado correctamente"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensaje: "Error al actualizar cliente"
        });
    }
};

const eliminarCliente = async (req, res) => {
    try {
        const id = req.params.id;

        await clienteModel.eliminarCliente(id);

        res.status(200).json({
            mensaje: "Cliente eliminado correctamente"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensaje: "Error al eliminar cliente"
        });
    }
};

module.exports = {
    crearCliente,
    mostrarClientes,
    mostrarClientePorDni,
    actualizarCliente,
    eliminarCliente
};