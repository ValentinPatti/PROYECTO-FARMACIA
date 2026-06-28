const empleadoModel = require("../models/empleadoModel.js");


const crearEmpleado = async (req, res) => {
    try {
        const empleado = req.body;

        await empleadoModel.crear(empleado);

        res.status(201).json({
            mensaje: "Empleado creado correctamente"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensaje: "Error al crear el empleado"
        });
    }
};


const mostrarEmpleados = async (req, res) => {
    try {
        const empleados = await empleadoModel.obtenerTodos();

        res.status(200).json(empleados);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensaje: "Error al obtener empleados"
        });
    }
};


const mostrarEmpleadoPorDni = async (req, res) => {
    try {
        const dni = req.params.dni;

        const empleado = await empleadoModel.obtenerEmpleadoPorDni(dni);

        res.status(200).json(empleado);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensaje: "Error al buscar empleado"
        });
    }
};


const actualizarEmpleado = async (req, res) => {
    try {
        const id = req.params.id;
        const datos = req.body;

        await empleadoModel.actualizarEmpleado(id, datos);

        res.status(200).json({
            mensaje: "Empleado actualizado correctamente"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensaje: "Error al actualizar empleado"
        });
    }
};

const eliminarEmpleado = async (req, res) => {
    try {
        const id = req.params.id;

        await empleadoModel.eliminarEmpleado(id);

        res.status(200).json({
            mensaje: "Empleado eliminado correctamente"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensaje: "Error al eliminar empleado"
        });
    }
};

module.exports = {
    crearEmpleado,
    mostrarEmpleados,
    mostrarEmpleadoPorDni,
    actualizarEmpleado,
    eliminarEmpleado
};