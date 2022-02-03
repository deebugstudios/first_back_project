// const fruits = ['Apple', 'Orange', 'Mango', 'Banana', 'Papaya'];

// // length of an array
// console.log(fruits.length);
// // length of item in array
// console.log(fruits[3].length);

// // first element of an array
// console.log(fruits[0]);
// let arrayLength = fruits.length;
// console.log(fruits[arrayLength - 1]);

// // Add an element to an array
// fruits.push('Coconut');
// console.log(fruits);

// // push multiple items to the array
// fruits.push('Guava', 'Pear', 'Cashew');
// console.log(fruits);

// // print out all elements of the array using for loop
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// // remove an item from an array
// fruits.pop();
// console.log(fruits);

const consoles = [];
consoles[0] = 'Xbox';
consoles[1] = 'Playstation';
consoles[2] = 'Switch';
consoles[3] = 'Vita';
consoles[4] = 'Gameboy';
consoles[consoles.length] = 'Sega'; // consoles[5] = 'Sega';
consoles[consoles.length] = 'PC';

// for(let i = 0; i < consoles.length; i++){
//     console.log(consoles[i]);
// }

// Add an item to the beginning of an array
console.log(`Previous length of array ${consoles.length}`);
let newLength = consoles.unshift('Stadia');
console.log(consoles);
console.log(`New length of the array ${newLength}`);


// remove an item from the beginning of an array
console.log(consoles.shift());
console.log(consoles);

let arr = [5];
console.log(arr);

let newArr = new Array(5);
console.log(newArr);

console.log(typeof arr);
console.log(Array.isArray(newArr));