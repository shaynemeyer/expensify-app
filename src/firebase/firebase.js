import * as firebase from 'firebase';
import config from '../config/keys'

firebase.initializeApp(config.firebase);

const database = firebase.database();

// database.ref().set({
//   name: 'Andrew Mead',
//   age: 26,
//   isSingle: false,
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log("Data is saved");
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref('isSingle')
// .remove()
// .then(() => {
//   console.log('Data was removed')
// }).catch((e) => {
//   console.log('Did not remove data.', e);
// });
