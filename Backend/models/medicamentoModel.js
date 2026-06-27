const pool = require('../database/db.js')

const crear = async(medicamento) =>{
    const sql = `
    INSERT INTO medicamento
    (nombre,precio,stock,fecha_vencimiento,id_proveedor)
    VALUES(?,?,?,?,?)
    `
    await pool.query(sql,[medicamento.nombre, medicamento.precio, medicamento.stock, medicamento.fecha_vencimiento, medicamento.id_proveedor])
}

const obtenerTodos = async() =>{
    const sql = `SELECT * FROM medicamento`

    const [rows] = await pool.query(sql);
    
    return rows;
}

const obtenerMedicamentoPorNombre = async(nombre) =>{
    const sql = `SELECT * FROM medicamento WHERE nombre=?`
    const [rows] = await pool.query(sql, [nombre])

    return rows
}

const actualizarMedicamento = async(id, medicamento)=>{
    const sql = `UPDATE medicamento 
    SET nombre=?, precio=?, stock=?, fecha_vencimiento=?`;

    await pool.query(sql, [medicamento.nombre, medicamento.precio, medicamento.stock, medicamento.fecha_vencimiento, id])
}
module.exports = {crear, obtenerTodos, obtenerMedicamentoPorNombre, actualizarMedicamento}