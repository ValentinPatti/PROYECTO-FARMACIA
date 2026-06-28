const pool = require("../database/db.js");

const crear = async (empleado) => {
    const sql = `
        INSERT INTO empleado
        (dni, nombre, apellido, direccion, contrasena, rol, telefono)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    await pool.query(sql, [
        empleado.dni,
        empleado.nombre,
        empleado.apellido,
        empleado.direccion,
        empleado.contrasena,
        empleado.rol,
        empleado.telefono
    ]);
};

const obtenerTodos = async () => {
    const sql = `SELECT * FROM empleado`;

    const [rows] = await pool.query(sql);
    return rows;
};

const obtenerEmpleadoPorDni = async (dni) => {
    const sql = `SELECT * FROM empleado WHERE dni = ?`;

    const [rows] = await pool.query(sql, [dni]);
    return rows;
};

const actualizarEmpleado = async (id, empleado) => {
    const sql = `
        UPDATE empleado
        SET dni = ?,
            nombre = ?,
            apellido = ?,
            direccion = ?,
            contrasena = ?,
            rol = ?,
            telefono = ?
        WHERE id_empleado = ?
    `;

    await pool.query(sql, [
        empleado.dni,
        empleado.nombre,
        empleado.apellido,
        empleado.direccion,
        empleado.contrasena,
        empleado.rol,
        empleado.telefono,
        id
    ]);
};

const eliminarEmpleado = async (id) => {
    const sql = `DELETE FROM empleado WHERE id_empleado = ?`;

    await pool.query(sql, [id]);
};

const obtenerEmpleadoPorLogin = async (dni) => {
    const sql = `
        SELECT *
        FROM empleado
        WHERE dni = ?
    `;

    const [rows] = await pool.query(sql, [dni]);

    return rows[0];
};

module.exports = {
    crear,
    obtenerTodos,
    obtenerEmpleadoPorDni,
    obtenerEmpleadoPorLogin,
    actualizarEmpleado,
    eliminarEmpleado
};