const pool = require('../database/db.js')

const crear = async(medicamento) =>{
    const sql = `
    INSERT INTO medicamento
    (nombre,precio,stock,fecha_vencimiento,id_proveedor)
    VALUES(?,?,?,?,?)
    `
    await pool.query(sql,[medicamento.nombre, medicamento.precio, medicamento.stock, medicamento.fecha_vencimiento, medicamento.id_proveedor])
}

module.exports = {crear}