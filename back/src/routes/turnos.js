const { Router } = require('express');
const router = Router()

const {getAllTurnos, addTurno, deleteTurno, getByIdTurno,clearTurnos} = require('./../controllers/turnos')

router.get('/' , getAllTurnos)
router.get( '/:id', getByIdTurno )
router.post( '/' , addTurno )
// router.put( '/:id' , updateTurno )
router.delete( '/:id' , deleteTurno )
router.delete('/clear/turnos', clearTurnos)

module.exports = router
