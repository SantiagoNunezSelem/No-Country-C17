const {Empleado} = require('../db')

const getAllEmployed = async(req, res, next) => {
    let {name} = req.query;

    try{
        // let employed;
        if(name){
            let employed =  await Empleado.find({nombre: name});
            employed ? res.send(employed) : res.status(404).send("No se encontraron empleados con el nombre " + name);
        }else{
            let {count, rows} = await Empleado.findAndCountAll({include: ["sucursal"]})
            res.send({count, rows})
        }
    }catch(error){
        console.log("Error al obtener los empleados", error);
        next(error);
    }
}

module.exports = {getAllEmployed}