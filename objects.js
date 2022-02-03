// const person = {
//     firstname: 'John',
//     middlename: 'Ntohol',
//     lastname: 'Mote',
//     age: 600,
//     eye_color: 'Purple',
//     is_a_legend: true,
//     address: {
//         street: 'My street',
//         no: 7,
//         city: 'Benin',
//         state: 'Edo',
//         country: 'Nigeria'
//     }
// };

// console.log(person);
// console.log(person.firstname);
// console.log(person.address.street);
// console.log(person['address']['city']);
// console.log(person['address'].country);
// console.log(person['firstname']);

const user = {};
user.firstname = 'John';
user.lastname = 'Mote';
user.age = 890;
user.nationality = 'Cameroonian';
user.likes = ['Coding', 'Coding', 'Gaming'];

console.log(user);
console.log(user.likes[2]);

let firstname = 'John';
const newUser = {
    firstname,
    lastname: 'Mote'
};
console.log(newUser);