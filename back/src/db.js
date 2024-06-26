const {Sequelize} = require('sequelize')
const fs = require('fs')
const dotenv = require('dotenv').config()
const path = require('path')
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, PORT
} = process.env;


const sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "mysql",
        host: DB_HOST,
        port: PORT,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
      `mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${PORT}/${DB_NAME}`,
      { logging: false, native: false }
    );

    // new Sequelize(
    //   `mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${PORT}/${DB_NAME}`,
    //   { logging: false, native: false }
    // );


// const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
//     host: DB_HOST,
//     dialect: 'mysql', // Puedes cambiarlo si estás usando otro dialecto
//   });

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
});


// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);


const {Empleado, Servicio, Sucursal, Turno, Usuario} = sequelize.models

Empleado.belongsTo(Sucursal, {as: "sucursal"})
Sucursal.hasMany(Empleado, {as: "empleados"})
Empleado.hasMany(Turno, {as: 'turnos'})
Turno.belongsTo(Empleado, {as : 'empleado'})
Usuario.hasMany(Turno,{ as:'turnos' })
Turno.belongsTo(Usuario , {as : 'usuario'})
Servicio.belongsToMany(Turno, {through: "turno-servicio"})
Turno.belongsToMany(Servicio, {through: "turno-servicio"})

module.exports = {
    ...sequelize.models,
    conn: sequelize,
}