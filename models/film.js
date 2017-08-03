var mongoose = require('mongoose')

var Schema = mongoose.Schema

var filmSchema = Schema({
  judul: {
    type: String,
    required: true
  },
  tahun: Number,
  rilis: Boolean,
},{
  timestamps: true
})

var Film = mongoose.model('Film', filmSchema)
module.exports = Film
