const {DataTypes} = require('sequelize')

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
        horaInicio:{
            type: DataTypes.DATE, //DATE SI NO FUNCIONA
            allowNull: false
        },
        horaFin:{
            type: DataTypes.DATE, //DATE SI NO FUNCIONA
            allowNull: false
        }
    })
}