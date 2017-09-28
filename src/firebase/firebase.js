import * as firebase from 'firebase';
import config from '../config/keys'

firebase.initializeApp(config.firebase);

const database = firebase.database();

database.ref().set({
  name: 'Andrew Mead',
  age: 26,
  isSingle: false,
  stressLevel: 6,
  job: {
    title: 'Software Developer',
    company: 'Google'
  },
  location: {
    city: 'Philadelphia',
    country: 'United States'
  }
}).then(() => {
  console.log("Data is saved");
}).catch((e) => {
  console.log('This failed.', e);
});

database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
});

// database.ref('isSingle')
// .remove()
// .then(() => {
//   console.log('Data was removed')
// }).catch((e) => {
//   console.log('Did not remove data.', e);
// });
