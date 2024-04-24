const { Router } = require('express');
const express = require('express');
const logger = require('morgan');

const router = Router()

router.use(express.json())
router.use(logger('tiny'))

router.use('/employed', require( './employed.js' ))
router.use('/services', require( './services.js' ))
router.use('/sucursales', require('./sucursal.js'))
router.use('/turnos', require('./turnos.js'))
router.use('/usuario', require('./usuarios.js'))

module.exports = router

