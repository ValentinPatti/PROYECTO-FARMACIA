const ventaModel = require("../models/ventaModel.js");

const crearVenta = async (req, res) => {
    try {
        const venta = req.body;

        await ventaModel.crear(venta);

        res.status(201).json({
            mensaje: "Venta creada correctamente"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensaje: "Error al crear la venta"
        });
    }
};

const mostrarVentas = async (req, res) => {
    try {
        const ventas = await ventaModel.obtenerTodas();

        res.status(200).json(ventas);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensaje: "Error al obtener ventas"
        });
    }
};

const mostrarVentaPorId = async (req, res) => {
    try {
        const id = req.params.id;

        const venta = await ventaModel.obtenerVentaPorId(id);

        res.status(200).json(venta);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensaje: "Error al buscar la venta"
        });
    }
};

const actualizarVenta = async (req, res) => {
    try {
        const id = req.params.id;
        const datos = req.body;

        await ventaModel.actualizarVenta(id, datos);

        res.status(200).json({
            mensaje: "Venta actualizada correctamente"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensaje: "Error al actualizar la venta"
        });
    }
};

const eliminarVenta = async (req, res) => {
    try {
        const id = req.params.id;

        await ventaModel.eliminarVenta(id);

        res.status(200).json({
            mensaje: "Venta eliminada correctamente"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensaje: "Error al eliminar la venta"
        });
    }
};

module.exports = {
    crearVenta,
    mostrarVentas,
    mostrarVentaPorId,
    actualizarVenta,
    eliminarVenta
};