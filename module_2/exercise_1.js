var prompt = require('prompt-sync')();

function  genArray(number) {
  var myArray = [];
  //First Version
 //  myArray.length = number;

 //Second Version
for (var i = 0; i < number; i++) {
    myArray.push(i);
  }

  return myArray;
}

//var size = prompt(Number("Enter the size of the Array: "));
var size = Number(prompt("Enter the size of the Array: "));
var array = genArray(size);
console.log(array);
console.log(array.length);
