// variables: size
// create un grid size x size
// on each new line alternate the end with " " or "#"

// variables
var size = 8;
var line = "";

// Loop per row
// Check the row
// If row is even line should start with " "
// If row is odd line should start with "#"
  // Loop per line
  // Check the line
  // If number is even append to line value " "
  // If number is odd append to line value "#"
  // Append a newline character
// Print to console

for (var i = 0; i < size; i++) {
  // inside the row
  if (i % 2 === 0) {
    for (var j = 0; j < size; j++) {
      // inside the line
      if (j % 2 === 0) {
        line = line + " ";
      } else {
        line = line + "#";
      }
    }
    // End line with newline decorator
    line = line + "\n";
  } else {
    for (var k = 0; k < size; k++) {
      // inside the line
      if (k % 2 !== 0) {
        line = line + " ";
      } else {
        line = line + "#";
      }
    }
    line = line + "\n";
  }
}

console.log(line);
