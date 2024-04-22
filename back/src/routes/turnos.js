const { Router } = require('express');
const router = Router()

//const {getAllTurnos, addTurno, deleteTurno, getByIdTurno} = require('./../controllers/sucursal')

router.get('/' , getAllTurnos)
router.post('/', addTurno )
router.delete('/all', deleteTurno)
router.get('/:id', getByIdTurno)


module.exports = router
