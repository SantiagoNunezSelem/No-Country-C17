const {getAllEmployed} = require("./../controllers/employed-controller.js")

const { Router } = require('express');

const router = Router()

router.get( '/', getAllEmployed); 

module.exports = router
