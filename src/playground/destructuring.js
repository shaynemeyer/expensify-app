// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Philadelphia',
//     temp: 92
//   }
// };
//
// const { name = 'Anonymous', age } = person;
//
// console.log(`${name} is ${age}.`);
//
// const { city, temp } = person.location;
// if(city && temp) {
//   console.log(`It's ${temp} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const { name: publisherName = 'Self-Published' } = book.publisher;
//
// console.log(publisherName);

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
//
// const [ , city, state] = address;
//
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ description, , mediumPrice, ] = item;

console.log(`A ${description} costs ${mediumPrice}`);
