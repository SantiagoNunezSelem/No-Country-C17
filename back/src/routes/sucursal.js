const {getAllSucursales, addSucursal,deleteAllSucursal, getByIdSucursal} = require('./../controllers/sucursal')
const { Router } = require('express');

const router = Router()


router.get('/' , getAllSucursales)
router.post('/', addSucursal )
router.delete('/all', deleteAllSucursal)
router.get('/:id', getByIdSucursal)

module.exports = router
