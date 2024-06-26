const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('usuario',{
        idUsuario:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
        },
        nombre:{
            type: DataTypes.STRING(50), 
            allowNull: false
        },
        apellido:{
            type: DataTypes.STRING(50), 
            allowNull: false
        },
        email:{
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                isEmail: true,        
            }
        },
        pwd:{
            type: DataTypes.STRING(50), 
            allowNull: false
        },
        fechaNacimiento:{
            type:  DataTypes.DATEONLY
        },
        telefono:{
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                isValidPhoneNumber(value) {
                  const phonePattern = /^\+[1-9]\d{1,14}$/;
                  if (!phonePattern.test(value)) {
                    throw new Error('El número de teléfono debe tener un formato válido.');
                  }
                },
              },
        },
        admin:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        activo:{
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    } )
}
