// const express = require('express');
// const app = express();
const server = require("./src/app.js")
const {conn} = require("./src/db.js")
const cors = require('cors')

server.use(cors())

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
const port = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Servidor corriendo en el puerto ${PORT}`);
// });


conn.sync({ force: false }).then(() => {
  server.listen(port, () => {
    console.log(`%s listening at ${port}`); // eslint-disable-line no-console
  });
});