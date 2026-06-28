const proveedorModel = require("../models/proveedorModel.js");


const crearProveedor = async (req, res) => {
    try {
        const proveedor = req.body;

        await proveedorModel.crear(proveedor);

        res.status(201).json({
            mensaje: "Proveedor creado correctamente"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensaje: "Ocurrió un error al crear el proveedor"
        });
    }
};


const mostrarProveedores = async (req, res) => {
    try {
        const proveedores = await proveedorModel.obtenerTodos();

        res.status(200).json(proveedores);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensaje: "Ocurrió un error al obtener los proveedores"
        });
    }
};


const mostrarProveedorPorNombre = async (req, res) => {
    try {
        const nombre = req.params.nombre;

        const proveedor = await proveedorModel.obtenerProveedorPorNombre(nombre);

        res.status(200).json(proveedor);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensaje: "Ocurrió un error al buscar el proveedor"
        });
    }
};


const actualizarProveedor = async (req, res) => {
    try {
        const id = req.params.id;
        const datos = req.body;

        await proveedorModel.actualizarProveedor(id, datos);

        const resultado = await proveedorModel.actualizarProveedor(id, datos);

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                mensaje: "Proveedor no encontrado"
            });
        }

        res.status(200).json({
            mensaje: "Proveedor actualizado correctamente"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensaje: "Ocurrió un error al actualizar el proveedor"
        });
    }
};

const eliminarProveedor = async (req, res) => {
    try {
        const id = req.params.id;

        await proveedorModel.eliminarProveedor(id);

        res.status(200).json({
            mensaje: "Proveedor eliminado correctamente"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensaje: "Ocurrió un error al eliminar el proveedor"
        });
    }
};

module.exports = {
    crearProveedor,
    mostrarProveedores,
    mostrarProveedorPorNombre,
    actualizarProveedor,
    eliminarProveedor
};