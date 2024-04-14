// const express = require('express');
// const app = express();
const server = require("./src/app.js")
const {conn} = require("./src/db.js")
const cors = require('cors')

server.use(cors())


const port = process.env.PORT || 3001;


conn.sync({ force: false }).then(() => {
  server.listen(port, () => {
    console.log(`%s listening at ${port}`); // eslint-disable-line no-console
  });
});