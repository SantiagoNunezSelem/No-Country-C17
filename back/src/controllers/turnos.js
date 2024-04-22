const {Turno, Servicio} = require('./../db')


const getAllTurnos = async (req, res) => {
    try {
        const turnos = await Turno.findAll({ include: Servicio });
        res.status(200).json({ sucess: true, message: "All turnos", turnos: turnos });
    } catch (error) {
        res.status(500).json({sucess: false, message: "Error al obtener todos los turnos" });
    }
};

const updateTurno = async (req, res) => {
    try {
        
    } catch (error) {
       
    }
};


const addTurno = async (req, res) => {
    try {
        const { servicios, profesional, dia, hora  } = req.body;
        const nuevoTurno = await Turno.create({ profesional, dia, hora });

        if (servicios && servicios.length > 0) {
            await nuevoTurno.addServicios(servicios);
        }

        res.status(201).json({sucess: true, message: "Turno creado exitosamente" });
    } catch (error) {
        res.status(500).json({sucess: false, message: "Error al crear el turno" });
    }
};

const deleteTurno = async (req, res) => {
    const { id } = req.params;
    try {
        const turno = await Turno.destroy({ where: { idTurno: id } });
        if (!turno) {
            res.status(404).json({sucess: false, message: "El turno no fue encontrado" });
            return;
        }
        await turno.destroy(); 
        res.status(200).json({sucess: true, message: "El turno ha sido eliminado correctamente" });
    } catch (error) {
        res.status(500).json({sucess: false, message: "Error al eliminar el turno" });
    }
};


const getByIdTurno = async (req, res) => {
    const { idTurno } = req.params;
    try {
        const turno = await Turno.findByPk(idTurno, { include: Servicio });
        if (!turno) {
            res.status(404).json({sucess: false,  message: "Turno no encontrado" });
            return;
        }
        res.status(200).json({sucess: true, message: "El turno ha sido encontrado", turno: turno});
    } catch (error) {
        res.status(500).json({sucess: false,  message: "Error al obtener el turno" });
    }
};
