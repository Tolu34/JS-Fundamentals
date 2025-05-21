const arg = process.argv[2];

// parseInt converts the string to an integer or returns NaN if it can't
const num = parseInt(arg, 10);

// Check if num is a number using isNaN; if it's not a number, print "Not a number"
if (!arg || isNaN(num)) {
  console.log("Not a number");
} else {
  console.log("My number: " + num);
}


