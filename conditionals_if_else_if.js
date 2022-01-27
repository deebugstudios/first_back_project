if (false) {
    //  block of code to be executed if condition1 is true
} else if (true) {
    //  block of code to be executed if the condition1 is false and condition2 is true
} else {
    //  block of code to be executed if the condition1 is false and condition2 is false
}
  
//If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":

let time = 15;
let greeting;

if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting); // result: Good morning
  