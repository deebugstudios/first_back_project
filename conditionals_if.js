// Syntax:
if (true) {
  //  block of code to be executed if the condition is true
}

// Make a "Good day" greeting if the hour is less than 18:00

let hour = 15;
let greeting;

if(hour < 18){
    greeting = "Good day";
}

// Note that if the hour is not less than 18
// then the greeting variable never gets assigned
// a value and then remains undefined
console.log(greeting); // result: Good day

