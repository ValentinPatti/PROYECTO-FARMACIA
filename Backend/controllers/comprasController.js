const compraModel = require("../models/compraModel.js");

const crearCompra = async (req, res) => {
    try {
        const compra = req.body;

        await compraModel.crear(compra);

        res.status(201).json({
            mensaje: "Compra creada correctamente"
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Error al crear compra"
        });
    }
};

const mostrarCompras = async (req, res) => {
    try {
        const compras = await compraModel.obtenerTodas();

        res.status(200).json(compras);

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener compras"
        });
    }
};

const mostrarCompraPorId = async (req, res) => {
    try {
        const id = req.params.id;

        const compra = await compraModel.obtenerPorId(id);

        res.status(200).json(compra);

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al buscar compra"
        });
    }
};

const actualizarCompra = async (req, res) => {
    try {
        const id = req.params.id;
        const datos = req.body;

        await compraModel.actualizar(id, datos);

        res.status(200).json({
            mensaje: "Compra actualizada correctamente"
        });

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al actualizar compra"
        });
    }
};

const eliminarCompra = async (req, res) => {
    try {
        const id = req.params.id;

        await compraModel.eliminar(id);

        res.status(200).json({
            mensaje: "Compra eliminada correctamente"
        });

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al eliminar compra"
        });
    }
};

module.exports = {
    crearCompra,
    mostrarCompras,
    mostrarCompraPorId,
    actualizarCompra,
    eliminarCompra
};