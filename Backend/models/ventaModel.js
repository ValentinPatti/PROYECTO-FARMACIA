const pool = require("../database/db.js");

const crear = async (venta) => {
    const sql = `
        INSERT INTO ventas
        (id_empleado, id_cliente, fecha, metodo_pago, precio_total)
        VALUES (?, ?, ?, ?, ?)
    `;

    await pool.query(sql, [
        venta.id_empleado,
        venta.id_cliente,
        venta.fecha,
        venta.metodo_pago,
        venta.precio_total
    ]);
};

const obtenerTodas = async () => {
    const sql = `
        SELECT * FROM ventas
    `;

    const [rows] = await pool.query(sql);
    return rows;
};

const obtenerVentaPorId = async (id) => {
    const sql = `
        SELECT * FROM ventas
        WHERE id_venta = ?
    `;

    const [rows] = await pool.query(sql, [id]);
    return rows;
};

const actualizarVenta = async (id, venta) => {
    const sql = `
        UPDATE ventas
        SET id_empleado = ?,
            id_cliente = ?,
            fecha = ?,
            metodo_pago = ?
        WHERE id_venta = ?
    `;

    await pool.query(sql, [
        venta.id_empleado,
        venta.id_cliente,
        venta.fecha,
        venta.metodo_pago,
        id
    ]);
};

const actualizarTotalVenta = async (id) => {
    const sql = `
        UPDATE ventas v
        SET precio_total = (
            SELECT COALESCE(SUM(subtotal),0)
            FROM detalle_venta dv
            WHERE dv.id_venta = v.id_venta
        )
        WHERE v.id_venta = ?
    `;

    await pool.query(sql, [id]);
};

const obtenerVentaCompleta = async (id) => {
    const sql = `
        SELECT
            v.id_venta,
            v.fecha,
            v.metodo_pago,
            v.precio_total,

            c.nombre AS cliente,
            c.apellido AS cliente_apellido,

            e.nombre AS empleado,

            dv.id_detalle_venta,
            m.nombre AS medicamento,
            dv.cantidad,
            dv.precio_unitario,
            dv.subtotal

        FROM ventas v
        JOIN clientes c
            ON v.id_cliente = c.id_cliente
        JOIN empleado e
            ON v.id_empleado = e.id_empleado
        JOIN detalle_venta dv
            ON v.id_venta = dv.id_venta
        JOIN medicamento m
            ON dv.id_medicamento = m.id_medicamento
        WHERE v.id_venta = ?
    `;

    const [rows] = await pool.query(sql, [id]);
    return rows;
};

const eliminarVenta = async (id) => {
    const sql = `
        DELETE FROM ventas
        WHERE id_venta = ?
    `;

    await pool.query(sql, [id]);
};

module.exports = {
    crear,
    obtenerTodas,
    obtenerVentaPorId,
    actualizarVenta,
    actualizarTotalVenta,
    obtenerVentaCompleta,
    eliminarVenta
};