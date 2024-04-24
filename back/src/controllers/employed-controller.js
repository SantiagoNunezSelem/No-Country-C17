const {Empleado, Turno, Sucursal} = require('../db')

const getAllEmployed = async(req, res, next) => {
    let {nombre} = req.query;


    try{
        // let employed;
        if(nombre){
            let employed =  await Empleado.findOne({where:{nombre: nombre} ,include: ["sucursal"]});
            employed ? res.send(employed) : res.status(404).send("No se encontraron empleados con el nombre " + nombre);
        }else{
            let {count, rows} = await Empleado.findAndCountAll({include: ["sucursal"]})
            res.send({count, rows})
        }
    }catch(error){
        console.log("Error al obtener los empleados", error);
        next(error);
    }
}

const getOneEmployed = async (req, res, next) => {
  let {id} = req.params;

  try{
    let empleado;
    id ? empleado =  await  Empleado.findByPk(id, {include:["sucursal","turnos"]}) : res.send({mensaje: "no se encontro el empleado"})
    res.send(empleado)

    }catch(error){
        next(error)
  }
}

const AddNewEmployed = async (req, res, next) => {
    let data = req.body;

    try{
        let newEmployee = Array.isArray(data) ? await Empleado.bulkCreate(data) : await Empleado.create(data)
        console.log(newEmployee)
        res.status(200).send({msg: "se agregaron nuevos"});
    }catch(error){
        next(error)
    }


}

const  updateEmployee = async (req, res, next) => {

}

const  deleteEmployed = async (req, res, next) => {

}

const deleteAllEmployed = async(req, res, next)=>{

    try{
       

        await Empleado.destroy({ truncate: true })
        res.send({msg: "se eliminaron todos los empleados de la bease de datos"})

    }catch(error){
        next(error)
    }
}

module.exports = {getAllEmployed, getOneEmployed, AddNewEmployed, updateEmployee, deleteEmployed, deleteAllEmployed}