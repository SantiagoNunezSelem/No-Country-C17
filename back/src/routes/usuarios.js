const { Router } = require('express');
const router = Router()

const {getAllUsers, createUser, deleteUser, getUserById , updateUser} = require('./../controllers/user-controller')

router.get('/' , getAllUsers)
router.get( '/:id', getUserById )
router.post( '/' , createUser )
router.put( '/:id' , updateUser )
router.delete( '/:id' , deleteUser )


module.exports = router