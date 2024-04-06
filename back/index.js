// const express = require('express');
// const app = express();
const server = require("./src/app.js")
const {conn} = require("./src/db.js")
const cors = require('cors')

server.use(cors())

// Importa las rutas


// Configura las rutas


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