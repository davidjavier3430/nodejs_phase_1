var prompt = require('prompt-sync')();

function bacCalculator(A, W, H) {
    var bac = (A * 5.14 / W * 0.69) - .015 * H;
    return console.log("Your bac% is: " + bac);
}

var A = Number(prompt("Total alcohol consumed, in ounces (oz)?"));
var W = Number(prompt("Body weight, in pounds (lbs)?"));
var H = Number(prompt("Time passed since drinking, in hours?"));

bacCalculator(A, W, H);
