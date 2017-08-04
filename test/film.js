var chai = require('chai')
var chaiHttp = require('chai-http')
var should = chai.should()

chai.use(chaiHttp)

var app = require('../app.js')

describe('Film API', function(){
  it('Create - Seharusnya success == true jika data yang dikirim benar', function(done){
    //buat film
    chai.request(app).post('/films').send({
        judul: 'Despicable Me 3',
        tahun: 2017
    }).end(function (err, res){
        if(err){
            console.log('res nya :', res)
        }
        res.should.be.json
        res.should.have.status(200)
        res.body.should.have.property('success')
        res.body.success.should.be.equal(true)
        done()
    })
  })  
})