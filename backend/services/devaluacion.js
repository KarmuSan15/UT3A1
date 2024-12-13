const db = require('./db');  // Conexión a la base de datos
const helper = require('../helper');  // Helper para manejar datos vacíos

// Función para obtener los datos de devaluación de la base de datos
async function getDevaluacion(req, res) {
  try {
    // Realizamos la consulta SELECT para obtener todos los registros de la tabla devaluacion
    const rows = await db.query('SELECT * FROM devaluacion');

    // Usamos el helper para garantizar que no haya datos vacíos
    const data = helper.emptyOrRows(rows);

    // Retornamos los datos obtenidos
    return res.json({ data });
  } catch (err) {
    console.error('Error al obtener los datos de devaluación: ', err.message);
    return res.status(500).json({ message: 'Error al obtener los datos de devaluación' });
  }
}

// Función para insertar un nuevo registro de devaluación en la base de datos
async function addDevaluacion(req, res) {
  const { articulo, meses, devaluacion } = req.body;

  // Validación: asegúrate de que todos los campos estén presentes
  if (!articulo || !meses || !devaluacion) {
    return res.status(400).json({ message: 'Faltan datos para insertar la devaluación.' });
  }

  try {
    // Consulta SQL para insertar un nuevo registro de devaluación en la base de datos
    const result = await db.query(
      'INSERT INTO devaluacion (articulo, meses, devaluacion) VALUES (?, ?, ?)', 
      [articulo, meses, devaluacion]
    );

    // Si la inserción fue exitosa, result.affectedRows debería ser mayor que 0
    if (result.affectedRows > 0) {
      return res.status(201).json({ message: 'Devaluación insertada correctamente' });
    } else {
      return res.status(500).json({ message: 'Error al insertar la devaluación' });
    }
  } catch (err) {
    console.error('Error al insertar la devaluación: ', err.message);
    return res.status(500).json({ message: 'Error al insertar la devaluación' });
  }
}

module.exports = {
  getDevaluacion,
  addDevaluacion  // Exporta la nueva función para que pueda ser utilizada en otros archivos
};
