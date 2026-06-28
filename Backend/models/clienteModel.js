const pool = require("../database/db.js");

const crear = async (cliente) => {
    const sql = `
        INSERT INTO clientes
        (dni, nombre, apellido, telefono, direccion, obra_social)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    await pool.query(sql, [
        cliente.dni,
        cliente.nombre,
        cliente.apellido,
        cliente.telefono,
        cliente.direccion,
        cliente.obra_social
    ]);
};

const obtenerTodos = async () => {
    const sql = `SELECT * FROM clientes`;

    const [rows] = await pool.query(sql);
    return rows;
};

const obtenerClientePorDni = async (dni) => {
    const sql = `SELECT * FROM clientes WHERE dni = ?`;

    const [rows] = await pool.query(sql, [dni]);
    return rows;
};

const actualizarCliente = async (id, cliente) => {
    const sql = `
        UPDATE clientes
        SET dni = ?,
            nombre = ?,
            apellido = ?,
            telefono = ?,
            direccion = ?,
            obra_social = ?
        WHERE id_cliente = ?
    `;

    await pool.query(sql, [
        cliente.dni,
        cliente.nombre,
        cliente.apellido,
        cliente.telefono,
        cliente.direccion,
        cliente.obra_social,
        id
    ]);
};

const eliminarCliente = async (id) => {
    const sql = `DELETE FROM clientes WHERE id_cliente = ?`;

    await pool.query(sql, [id]);
};

module.exports = {
    crear,
    obtenerTodos,
    obtenerClientePorDni,
    actualizarCliente,
    eliminarCliente
};