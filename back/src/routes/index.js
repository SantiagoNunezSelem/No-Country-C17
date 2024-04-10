const { Router } = require('express');
const express = require('express');
const logger = require('morgan');

const router = Router()

router.use(express.json())
router.use(logger('tiny'))

router.use('/employed', require( './employed.js' ))
router.use('/services', require( './services.js' ))

module.exports = router

