const {getAllSucursales, addSucursal,deleteAllSucurasl, getByIdSucursal} = require('./../controllers/sucursal')
const { Router } = require('express');

const router = Router()


router.get('/' , getAllSucursales)
router.post('/', addSucursal )
router.delete('/all', deleteAllSucurasl)
router.get('/:id', getByIdSucursal)

module.exports = router
