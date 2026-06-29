const pool = require('../database/db.js')

const crear = async(medicamento) =>{
    const sql = `
    INSERT INTO medicamento
    (nombre,precio,stock,fecha_vencimiento,id_proveedor)
    VALUES(?,?,?,?,?)
    `

    try {
        const result = await pool.query(sql,[medicamento.nombre, medicamento.precio, medicamento.stock, medicamento.fecha_vencimiento, medicamento.id_proveedor])
        return result
    } catch (error) {
        console.error("ERROR MYSQL INSERT:", error.sqlMessage || error);
        throw error;
    }
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

const obtenerMedicamentoPorId = async(id)=>{
    const sql = `SELECT * FROM medicamento WHERE id_medicamento=?`;
    const [rows] = await pool.query(sql,[id]);

    return rows[0];

}

const actualizarMedicamento = async(id, medicamento)=>{
    const sql = `UPDATE medicamento 
    SET nombre=?, precio=?, stock=?, fecha_vencimiento=?, id_proveedor=? WHERE id_medicamento=?`;

    await pool.query(sql, [medicamento.nombre, medicamento.precio, medicamento.stock, medicamento.fecha_vencimiento, medicamento.id_proveedor, id])
}

const eliminarMedicamento = async(id)=>{
    const sql = `DELETE FROM medicamento WHERE id_medicamento=?` 
    await pool.query(sql, [id])
}
module.exports = {crear, obtenerTodos, obtenerMedicamentoPorNombre, obtenerMedicamentoPorId, actualizarMedicamento, eliminarMedicamento}