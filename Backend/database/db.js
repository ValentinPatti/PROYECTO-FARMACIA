const mysql = require("mysql2/promise")
const dotenv = require("dotenv")
require("dotenv").congif();

const mysql = require ("mysql2/promise");

const pool = mysql.createPool ({
    host: process.env.DB_HOST,
    user: process.env.DB_USUARIO,
    password: process.env.DB_CONTRASENA,
    database: process.env.DB_NOMBRE,
    waitForConnection: true,
    ConnectionLimit: 10,
    queueLImit: 0
});

module.exports = pool;
