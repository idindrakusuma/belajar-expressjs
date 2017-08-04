'use strict'

module.exports = {
  fizzBuzz: function(number) {
    if(number % 15 == 0){
      return "FizzBuzz"
    }
    if (number % 5 == 0) {
      return "Buzz"
    }
    else if(number % 3 == 0){
      return "Fizz"
    }
    else{
      return "not Fizz and Buzz"
    }
  }
}
