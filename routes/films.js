var express = require('express')

var filmController = require('../controllers/film')

var router = express.Router()


//delete data
router.delete('/:filmId', filmController.destroy)
//get all data from database
router.get('/', filmController.index)

//post data from api
router.post('/', filmController.create)

module.exports = router
