const {Servicio} = require('./../db')

const getAllSevices = async (req, res, next) => {
    let {name} = req.query;
    try{
        // let employed;
        if(name){
            let servicio =  await Servicio.find({nombre: name});
            servicio ? res.send(servicio) : res.status(404).send("No se encontraron empleados con el nombre " + name);
        }else{
            let {count, rows} = await Servicio.findAndCountAll()
            res.send({count, rows})
        }
    }catch(error){
        console.log("Error al obtener los empleados", error);
        next(error);
    }
}

const  createService = async (req, res, next) => {
    let {nombre,costo,des} = req.body;

    try{
        let newServi =await Servicio.create({
            nombre,
            costo,
            des
        });

        res.send(newServi);
    }catch(error){
        next(error)
    }
}

const getOneService = async (req, res, next) => {

}

const  updateService = async (req, res, next) => {

}

const  deleteService = async(req,res,next) =>{

}

module.exports = {getAllSevices, getOneService, deleteService, updateService, createService}