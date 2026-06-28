const empleadoModel = require("../models/empleadoModel.js");

const iniciarSesion = async (req, res) => {
    try {

        const { dni, contrasena } = req.body;

        if (!dni || !contrasena) {
            return res.status(400).json({
                mensaje: "Debes ingresar DNI y contraseña"
            });
        }

        const empleado = await empleadoModel.obtenerEmpleadoPorLogin(dni);

        if (!empleado) {
            return res.status(404).json({
                mensaje: "No existe un empleado con ese DNI"
            });
        }

        if (empleado.contrasena !== contrasena) {
            return res.status(401).json({
                mensaje: "Contraseña incorrecta"
            });
        }

        res.status(200).json({
            mensaje: "Inicio de sesión exitoso",
            id_empleado: empleado.id_empleado,
            nombre: empleado.nombre,
            apellido: empleado.apellido,
            rol: empleado.rol
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Error interno del servidor"
        });
    }
};

module.exports = {
    iniciarSesion
};