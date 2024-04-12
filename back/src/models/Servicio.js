const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define("servicio", {
        idServicio:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING(50), 
            allowNull: false
        },
        costo:{
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        descripcion:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        imagen:{
            type: DataTypes.STRING,
            allowNull: true
        }
    })
}