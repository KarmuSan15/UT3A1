/*// Importo el express, cors y otros módulos necesarios
const express = require('express');
const cors = require('cors');

// Importo el fichero login.js y items.js que están en la carpeta services
const login = require('./services/login');
const items = require('./services/items');

// Definimos el puerto por el que va a escuchar nuestra API las peticiones
const port = 3030;

const app = express();
app.use(express.json()); // Para manejar JSON
app.use(
  express.urlencoded({
    extended: true, // Para que pueda manejar datos URL-encoded (formulario)
  })
);
app.use(cors()); // Permite CORS

// Ejemplo para ver cómo funciona un endpoint:
app.get('/', function (req, res) {
  res.json({ message: 'Hola Mundo!' });
});

// Creación del endpoint: /login
// Llama al fichero login.js usando el método getUserData pasándole
// el login (user) y la contraseña (password)
app.get('/login', async function (req, res, next) {
  console.log(req.query);
  console.log(req.query.user);
  console.log(req.query.password);
  try {
    res.json(await login.getUserData(req.query.user, req.query.password));
  } catch (err) {
    console.error(`Error while getting data `, err.message);
    next(err);
  }
});

// Endpoint para insertar un item en la base de datos
app.post('/addItem', async (req, res) => {
  try {
    await items.insertData(req, res); // Llama la función insertData del archivo items.js
  } catch (err) {
    console.error(`Error while inserting item: ${err.message}`);
    res.status(500).json({ message: 'Error al insertar el item' });
  }
});

// Endpoint para obtener todos los items de la base de datos
app.get('/getItems', async (req, res) => {
  try {
    await items.getData(req, res); // Llama la función getData del archivo items.js
  } catch (err) {
    console.error(`Error while getting items: ${err.message}`);
    res.status(500).json({ message: 'Error al obtener los items' });
  }
});

// Endpoint para eliminar un item de la base de datos por ID
app.get('/deleteItem', async (req, res) => {
  try {
    const { id } = req.query; // Extraemos el id desde los parámetros de la URL
    if (!id) {
      return res.status(400).json({ message: 'ID del item es necesario para eliminar' });
    }
    await items.deleteData(req, res); // Llama la función deleteData del archivo items.js
  } catch (err) {
    console.error(`Error while deleting item: ${err.message}`);
    res.status(500).json({ message: 'Error al eliminar el item' });
  }
});

// Iniciamos la API
app.listen(port, () => {
  console.log('API escuchando en el puerto ' + port);
});
*/

//&INDEX EXAMEN

// Importo los módulos necesarios
const express = require('express');
const cors = require('cors');

// Importo los servicios que gestionan la lógica de login, items y usuarios
const login = require('./services/login');
const items = require('./services/items');
const users = require('./services/users');  // Nuevo servicio para manejar usuarios

// Definimos el puerto por el que va a escuchar nuestra API
const port = 3030;

const app = express();
app.use(express.json()); // Para manejar JSON
app.use(express.urlencoded({ extended: true })); // Para manejar datos URL-encoded (formularios)
app.use(cors()); // Permite CORS

// Ejemplo para ver cómo funciona un endpoint básico
app.get('/', (req, res) => {
  res.json({ message: 'Hola Mundo!' });
});

// Endpoint para el login
app.get('/login', async (req, res, next) => {
  console.log(req.query);
  console.log(req.query.user);
  console.log(req.query.password);
  try {
    res.json(await login.getUserData(req.query.user, req.query.password));
  } catch (err) {
    console.error(`Error while getting login data: ${err.message}`);
    next(err);
  }
});

// Endpoint para insertar un item en la base de datos
app.post('/addItem', async (req, res) => {
  try {
    await items.insertData(req, res); // Llama a la función insertData del archivo items.js
  } catch (err) {
    console.error(`Error while inserting item: ${err.message}`);
    res.status(500).json({ message: 'Error al insertar el item' });
  }
});

// Endpoint para obtener todos los items de la base de datos
app.get('/getItems', async (req, res) => {
  try {
    await items.getData(req, res); // Llama a la función getData del archivo items.js
  } catch (err) {
    console.error(`Error while getting items: ${err.message}`);
    res.status(500).json({ message: 'Error al obtener los items' });
  }
});

// Endpoint para eliminar un item de la base de datos por ID
app.get('/deleteItem', async (req, res) => {
  try {
    const { id } = req.query; // Extraemos el id desde los parámetros de la URL
    if (!id) {
      return res.status(400).json({ message: 'ID del item es necesario para eliminar' });
    }
    await items.deleteData(req, res); // Llama a la función deleteData del archivo items.js
  } catch (err) {
    console.error(`Error while deleting item: ${err.message}`);
    res.status(500).json({ message: 'Error al eliminar el item' });
  }
});

// Nuevo endpoint para obtener todos los usuarios desde la base de datos
app.get('/getUsers', async (req, res) => {
  try {
    await users.getUsers(req, res);  // Llama a la función getUsers del archivo users.js
  } catch (err) {
    console.error(`Error while getting users: ${err.message}`);
    res.status(500).json({ message: 'Error al obtener los usuarios' });
  }
});

// Nuevo endpoint para agregar un nuevo usuario
app.post('/addUser', async (req, res) => {
  try {
    await users.addUser(req, res);  // Llama a la función addUser del archivo users.js
  } catch (err) {
    console.error(`Error while adding user: ${err.message}`);
    res.status(500).json({ message: 'Error al agregar el usuario' });
  }
});

// Iniciamos la API
app.listen(port, () => {
  console.log('API escuchando en el puerto ' + port);
});
