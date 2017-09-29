import * as firebase from 'firebase';
import config from '../config/keys'

firebase.initializeApp(config.firebase);

const database = firebase.database();

database.ref().on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
});

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// });
//
// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);
//
// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);
//
// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Andrew Mead',
//   age: 26,
//   isSingle: false,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log("Data is saved");
// }).catch((e) => {
//   console.log('This failed.', e);
// });
//
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref('isSingle')
// .remove()
// .then(() => {
//   console.log('Data was removed')
// }).catch((e) => {
//   console.log('Did not remove data.', e);
// });
