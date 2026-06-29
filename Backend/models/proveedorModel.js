const pool = require("../database/db.js");

const crear = async (proveedor) => {
    const sql = `
        INSERT INTO proveedores
        (nombre, direccion, telefono, email)
        VALUES (?, ?, ?, ?)
    `;

    await pool.query(sql, [
        proveedor.nombre,
        proveedor.direccion,
        proveedor.telefono,
        proveedor.email
    ]);
};

const obtenerTodos = async () => {
    const sql = `SELECT * FROM proveedores`;

    const [rows] = await pool.query(sql);

    return rows;
};

const obtenerProveedorPorNombre = async (nombre) => {
    const sql = `SELECT * FROM proveedores WHERE nombre = ?`;

    const [rows] = await pool.query(sql, [nombre]);

    return rows;
};

const actualizarProveedor = async (id, proveedor) => {
    const sql = `
        UPDATE proveedores
        SET nombre = ?,
            direccion = ?,
            telefono = ?,
            email = ?
        WHERE id_proveedor = ?
    `;

    const [resultado] = await pool.query(sql, [
        proveedor.nombre,
        proveedor.direccion,
        proveedor.telefono,
        proveedor.email,
        id
    ]);

    return resultado;
};

const eliminarProveedor = async (id) => {
    const sql = `DELETE FROM proveedores WHERE id_proveedor = ?`;

    await pool.query(sql, [id]);
};

module.exports = {
    crear,
    obtenerTodos,
    obtenerProveedorPorNombre,
    actualizarProveedor,
    eliminarProveedor
};