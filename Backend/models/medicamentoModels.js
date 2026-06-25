const db = require("../database/db");

const obtenerMedicamentos = async () => {
    const [rows] = await db.query(
        "SELECT * FROM medicamento"
    );

    return rows;
};

module.exports = {
    obtenerMedicamentos
};