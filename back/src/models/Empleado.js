const {DataTypes, Sequelize} = require( 'sequelize');

module.exports = (sequelize) => {
    sequelize.define('empleado' , {
        idEmpleado:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
        },
        nombre:{
            type: DataTypes.STRING(50), 
            allowNull: false
        },
        imagen:{
            type: DataTypes.STRING(50),
        }
    })
}