//Use the else statement to specify a block of code to be executed if the condition is false.
if (false) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}


//If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":

let hour = 21;
let greeting;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// This time, greeting must get assigned a value
// so it is a safer operation, and greeting can
// never be undefined when it is accessed in the
// console.log() statement
console.log(greeting); // result: Good evening
