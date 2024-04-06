const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define("sucursal", {
        idSucursal:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING(50), 
            allowNull: false
        },
        ubicacion:{
            type:  DataTypes.TEXT, //GEOMETRY("POINT")
            allowNull: false
        },
        desc:{
            type: DataTypes.TEXT,
            allowNull: true
        }
    })
}