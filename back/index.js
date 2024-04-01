const express = require('express');
const app = express();

// Importa las rutas


// Configura las rutas


// Configura el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
