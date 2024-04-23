const { Router } = require('express');
const router = Router()

const {getAllUsers, addUser, deleteUser, getByIdUser , updateUser} = require('./../controllers/user-controller')

router.get('/' , getAllUsers)
router.get( '/:id', getByIdUser )
router.post( '/' , addUser )
//router.put( '/:id' , updateUser )
router.delete( '/:id' , deleteUser )


module.exports = router
