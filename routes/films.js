var express = require('express')

var Film = require('../models/film')

var router = express.Router()

//get all data from database
router.get('/', function(req, res){
  Film.find({}, function(err, films){
    if (err) {
      var result = err
    }
    else{
      var result = films
    }
    //convert to json
    res.json(result)
  })
})

//delete data
router.delete('/:filmId', function(req,res) {
  console.log('delete film by id...');

  Film.findByIdAndRemove(req.params.filmId, function(err){
    if (err) {
      res.json(err)
    }
    res.json({
      msg: "terhapus.."
    })
  })
})

//post data from api
router.post('/', function(req, res) {
  //console.log('data request : ', req.body);
  var result = {}

  var film = new Film({
    judul: req.body.judul,
    tahun: req.body.tahun
  })

  film.save(function(err){
    if (err) {
      result.msg = err
      res.json(result)
    }
    else{
      result.msg = 'Sukses!'
      res.json(result)
    }
  })
  //res.json(req.body)
})

module.exports = router
