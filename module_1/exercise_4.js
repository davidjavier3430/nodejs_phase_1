var prompt = require('prompt-sync')();

function EvenOrOdd(number) {
  if ((number % 2)=== 0) {
    return console.log("Your number is Odd");
  }
  else {
    console.log("Your number is Even");
  }
}

var myNumber = Number(prompt('Put a Number?'));

EvenOrOdd(myNumber);
