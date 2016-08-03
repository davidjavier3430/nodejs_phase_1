var prompt = require('prompt-sync')();

var x = Number(prompt('Insert a First number'));
var y = Number(prompt('Insert a Second number'));
//Verify if this version is correct
// if (((x % y)=== 0) || ((y % x) === 0)) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }
//Verify if this version is correct
// if (((x % y) || (y % x)) === 0) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }
//
if ((x % y)=== 0) {
  console.log("Yes");
} else {
  console.log("No");
}

if ((y % x) === 0) {
  console.log("Yes");
} else {
  console.log("No");
}
