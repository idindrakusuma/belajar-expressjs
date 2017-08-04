var chai = require('chai')
var should = chai.Should()

var fizzBuzzTest = require('../helpers/fizzbuzz')

describe('FizzBuzz test', function(){
  it('If multiply by 3, should be print Fizz', function() {
    fizzBuzzTest.fizzBuzz(3).should.equal('Fizz')
  })

  it('If multiply by 5, should be print Buzz', function(){
    fizzBuzzTest.fizzBuzz(5).should.equal('Buzz')
  })

  it('If multiply by 3 x 5, should be print FizzBuzz', function(){
    fizzBuzzTest.fizzBuzz(15).should.equal('FizzBuzz')
  })

  it('If multiply by 5, should not be print Buzz', function(){
    fizzBuzzTest.fizzBuzz(4).should.not.equal('Buzz')
  })

})
