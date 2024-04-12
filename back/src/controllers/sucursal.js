const {Sucursal} = require('./../db')

const getAllSucursales = async(req, res, next) => {
    let{nombre} = req.query;

    try{
        const data = nombre ? await Sucursal.findOne({where :{nombre: nombre}}) : await Sucursal.findAndCountAll()
        data ? res.send(data) : res.send({msg:'No se encontraron resultados'})

    }catch(error){
        next(error)
    }
}

const addSucursal = async(req, res, next) => {
    let data = req.body;

    try{
        const newSucursal = Array.isArray(data) ? await Sucursal.bulkCreate(data) : await Sucursal.create(data)
        console.log(newSucursal)
        res.send({msg: "nueva sucursal agregada"});

    }catch(error){
        next(error)
    }
}

const deleteAllSucurasl = async(req, res, next)=>{

    try{
        await Sucursal.destroy({ where: {}, truncate: true })
        let data = await Sucursal.findAndCountAll()
        res.send(data)

    }catch(error){
        next(error)
    }
}


module.exports={getAllSucursales, addSucursal, deleteAllSucurasl}; 