var prompt = require('prompt-sync')();

function fizzBuzz(numberList) {
    for (var i = 1; i <= numberList; i++) {

        if ((i % 3)=== 0 && (i % 5)=== 0) {
           console.log(i + " FizzBuzz");
        } else if ((i % 3)=== 0) {
           console.log(i + " Fizz");
        } else if ((i % 5)=== 0) {
           console.log(i + " Buzz");
        } else {
           console.log(i);
        }
    }
}

var numberList = Number(prompt("Put a Number: "));
fizzBuzz(numberList);
