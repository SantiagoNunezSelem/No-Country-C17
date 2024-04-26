const {getAllEmployed, getOneEmployed, AddNewEmployed, updateEmployee, deleteEmployed, deleteAllEmployed} = require("./../controllers/employed-controller.js")

const { Router } = require('express');

const router = Router()

router.get( '/', getAllEmployed); 
router.post('/' , AddNewEmployed);
router.delete( "/:id" , deleteEmployed) ;
// router.delete('/', deleteAllEmployed)
router.get('/:id', getOneEmployed)

module.exports = router
