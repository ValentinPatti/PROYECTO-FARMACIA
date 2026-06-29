const pool = require("../database/db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    //tomar los datos del body de la request
    //datos de usuario nuevo = dni, nombre, apellido, contraseña, telefono

    const { dni, nombre, apellido, contrasena, telefono, rol } = req.body;

    //valido esos datos

    if (!dni || !nombre || !apellido || !contrasena || !telefono || !rol) {
      return res.status(400).json({ message: "faltan rellenar los campos" });
    }

    //buscar el dni en la db

    const buscarDni = `SELECT * FROM empleado WHERE dni=?`;
    const [rows] = await pool.query(buscarDni, [dni]);

    //si existe le envio un error diciendo que ya existe el usuario

    if (rows.length > 0) {
      return res.status(400).json({ message: "DNI inválido" });
    }

    //encriptar la contraseña

    const hashedContrasenia = await bcrypt.hash(contrasena, 12);

    //insertar el nuevo usuario

    const insertoNuevoUsuario = `INSERT INTO empleado (dni, nombre, apellido, contrasena, telefono, rol) VALUES (?,?,?,?,?,?)`;

    const [user] = await pool.query(insertoNuevoUsuario, [
      dni,
      nombre,
      apellido,
      hashedContrasenia,
      telefono,
      rol
    ]);

    //generar un token

    const token = jwt.sign({ id: user.insertId }, process.env.SECRET_KEY, {
      expiresIn: "10h",
    });

    //usuario creado correctamente + token

    res.status(200).json({ message: "usuario creado correctamente" }, token);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    //recibo los datos por el cuerpo de la request (dni, contraseña)

    const { dni, contrasena } = req.body;

    //valido los datos

    if (!dni || !contrasena) {
      return res.status(400).json({ message: "campos incorrectos" });
    }

    //busco ese dni en la db

    const buscarDni = `SELECT * FROM empleado WHERE dni=?`;

    const [rows] = await pool.query(buscarDni, [dni]);

    //si no existe mando mensaje de error

    if (rows.length === 0) {
      return res.status(400).json({ message: "No existe el DNI" });
    }

    //creo un usuario desde rows

    const usuario = rows[0];
    //comparo la contraseña ingresada con la hasheada
    
    const comparoContrasena = await bcrypt.compare(
      contrasena,
      usuario.contrasena,
    );


    if (!comparoContrasena) {
      return res.status(400).json({ message: "Contraseña incorrecta" });
    }

    //generar token

    const token = jwt.sign({ id: usuario.id }, process.env.SECRET_KEY, {
      expiresIn: "10h",
    });
    //respondo con usuario logueado + token

    res.status(200).json({ message: "usuario logueado correctamente" }, token);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { register, login };
