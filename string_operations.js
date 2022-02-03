let sentence = 'My name is John Mote and I am a developer';

// get the length of the string
console.log(sentence.length);
let strlength = sentence.length;
console.log(strlength);

// String concatenation
let firstName = 'John';
let middleName = 'Ntohol';
let lastName = 'Mote';

let fullName = firstName + ' ' + middleName + ' ' + lastName;
console.log(fullName);

// String interpolation
let interFullname = `My name is ${firstName} ${middleName} ${lastName} and I am 1000 years old.`;
console.log(interFullname);

// String splitting

let myFullName =  'John Ntohol Mote';
let myNames = myFullName.split('o');
console.log(myNames);
console.log(myNames[0].toUpperCase());

console.log(myFullName.toUpperCase());
console.log(myFullName.toLowerCase());

// search
console.log(myFullName.startsWith('Po'));
console.log(myFullName.endsWith('Mote'));
console.log(myFullName.search('Ntohol')); // This returns the index of where the child string begins in the parent string 
console.log(myFullName.search('o'));


// String as an array
// A String is an array of characters

let aString = 'This is a string';
console.log(aString.length);
console.log(aString[0]);
console.log(aString[3]);


