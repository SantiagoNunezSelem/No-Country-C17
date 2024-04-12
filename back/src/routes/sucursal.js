const {getAllSucursales, addSucursal,deleteAllSucurasl} = require('./../controllers/sucursal')
const { Router } = require('express');

const router = Router()


router.get('/' , getAllSucursales)
router.post('/', addSucursal )
router.delete('/', deleteAllSucurasl)

module.exports = router
