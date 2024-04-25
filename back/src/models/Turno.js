

const { DataTypes } = require("sequelize");
const Servicio = require('./Servicio');

module.exports = (sequelize) => {
  sequelize.define('turno', {
      idTurno:{
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV1,
          primaryKey: true,
      },
      turno:{
          type: DataTypes.STRING(50)
      },
      fecha:{
        type:DataTypes.DATEONLY,
        allowNull: false
      },
      hora:{
          type: DataTypes.TIME, //DATE SI NO FUNCIONA
          allowNull: false
      }
  })
}

// module.exports = (sequelize) => {
//   const Turno = sequelize.define("turno", {
//     idTurno: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV1,
//       primaryKey: true,
//     },
//     fecha: {
//       type: DataTypes.DATE,
//       allowNull: false,
//     },
//     profesional: {
//       type: DataTypes.STRING(50),
//       allowNull: false,
//     },
//   });

  // Turno.associate = (models) => {
  //   Turno.belongsToMany(models.Servicio, {
  //     through: "turnoServicio",
  //     foreignKey: "turnoId",
  //   });
  // };
// };
