require('dotenv').config();
const express = require('express');
const connection = require('./src/config/db');

const app = express();

// Importa las rutas
// Aquí importa tus rutas, por ejemplo:
// const routes = require('./src/routes');

// Configura las rutas
// app.use(routes);

connection.connect((error) => {
  if (error) {
     console.error('Error al conectar a la base de datos:', error);
     return;
  }

  console.log('Conexión exitosa a la base de datos');
});

// Configura el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
