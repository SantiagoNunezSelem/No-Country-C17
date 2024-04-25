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
    let data = req.body;

    try{
        let newServi = Array.isArray(data) ? await Servicio.bulkCreate(data) : await Servicio.create(data)

        res.send({msg:"OK, se agrego con exito"});

    }catch(error){
        next(error)
    }
}

const getOneService = async (req, res, next) => {
    try{

    }catch(error){
        next(error)
    }
}

const  updateService = async (req, res, next) => {
    let data = req.body
    let id = req.params.id

    try{
        let servicio = await Servicio.findByPk(id)
        
        if(!servicio) res.status(404).send({mensaje: "el servicio no fue encontrado"})
        else await Servicio.update(data,{where:{idServicio:id}})
        res.send({msg:`Se actualizo un servicio`})

    }catch(error){
        next(error)
    }
}

const  deleteService = async(req,res,next) =>{
    let {id} = req.params;

    try{
        let servicio = await Servicio.findByPk(id)
       
        if(!servicio) res.status(404).send({mensaje: "el servicio no fue encontrado"})
        else await Servicio.destroy({where : {idServicio:id}});
        res.status(200).send({mensaje:"servico eliminado"})
        

    }catch(error){
        next(error)
    }
}

module.exports = {getAllSevices, getOneService, deleteService, updateService, createService}