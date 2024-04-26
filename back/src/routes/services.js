const {getAllSevices, getOneService, deleteService, updateService, createService} = require('./../controllers/services')


const { Router } = require('express');

const router = Router()

router.get('/' , getAllSevices)
router.get( '/:id', getOneService )
router.post( "/" , createService )
router.put( '/:id' , updateService )
router.delete( '/:id' , deleteService )

module.exports = router
