const pool = require("../database/db.js");


const crear = async (compra) => {
    const sql = `
        INSERT INTO compras
        (id_proveedor, fecha, total)
        VALUES (?, ?, ?)
    `;

    await pool.query(sql, [
        compra.id_proveedor,
        compra.fecha,
        compra.total
    ]);
};


const obtenerTodas = async () => {
    const sql = `SELECT * FROM compras`;

    const [rows] = await pool.query(sql);
    return rows;
};


const obtenerPorId = async (id) => {
    const sql = `SELECT * FROM compras WHERE id_compra = ?`;

    const [rows] = await pool.query(sql, [id]);
    return rows;
};


const actualizar = async (id, compra) => {
    const sql = `
        UPDATE compras
        SET id_proveedor = ?,
            fecha = ?,
            total = ?
        WHERE id_compra = ?
    `;

    await pool.query(sql, [
        compra.id_proveedor,
        compra.fecha,
        compra.total,
        id
    ]);
};

const eliminar = async (id) => {
    const sql = `DELETE FROM compras WHERE id_compra = ?`;

    await pool.query(sql, [id]);
};

module.exports = {
    crear,
    obtenerTodas,
    obtenerPorId,
    actualizar,
    eliminar
};