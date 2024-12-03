const db = require('./db');  // Conexión a la base de datos
const helper = require('../helper');  // Helper para manejar datos vacíos

// Función para obtener los usuarios de la base de datos
async function getUsers(req, res) {
  try {
    // Realizamos la consulta SELECT para obtener todos los usuarios de la tabla usuarios
    const rows = await db.query('SELECT * FROM usuarios');

    // Usamos el helper para garantizar que no haya datos vacíos
    const data = helper.emptyOrRows(rows);

    // Retornamos los datos obtenidos
    return res.json({ data });
  } catch (err) {
    console.error('Error al obtener los usuarios: ', err.message);
    return res.status(500).json({ message: 'Error al obtener los usuarios' });
  }
}

// Función para insertar un nuevo usuario en la base de datos
async function addUser(req, res) {
  const { nombre, login, password, rol } = req.body;

  // Validación: asegúrate de que todos los campos estén presentes
  if (!nombre || !login || !password || !rol) {
    return res.status(400).json({ message: 'Faltan datos para insertar el usuario.' });
  }

  try {
    // Consulta SQL para insertar el usuario en la base de datos
    const result = await db.query(
      'INSERT INTO usuarios (nombre, login, password, rol) VALUES (?, ?, ?, ?)', 
      [nombre, login, password, rol]
    );

    // Si la inserción fue exitosa, result.affectedRows debería ser mayor que 0
    if (result.affectedRows > 0) {
      return res.status(201).json({ message: 'Usuario insertado correctamente' });
    } else {
      return res.status(500).json({ message: 'Error al insertar el usuario' });
    }
  } catch (err) {
    console.error('Error al insertar el usuario: ', err.message);
    return res.status(500).json({ message: 'Error al insertar el usuario' });
  }
}

module.exports = {
  getUsers,
  addUser  // Exporta la nueva función para que pueda ser utilizada en otros archivos
};
