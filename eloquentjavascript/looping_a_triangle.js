var prompt = require('prompt-sync')();

function loopingTriangle(floor) {
var triangle = '';
for (var i = 1;  i <= floor;  i++) {
      triangle = triangle + '#'.repeat(i) + '\n';
    }
    return console.log(triangle);
}

var floors = Number(prompt("How many floors you want? "));
loopingTriangle(floors);
