import * as firebase from 'firebase';
import config from '../config/keys'

firebase.initializeApp(config.firebase);

const database = firebase.database();

database.ref().set({
  name: 'Andrew Mead',
  age: 26,
  isSingle: false,
  location: {
    city: 'Philadelpia',
    country: 'United States'
  }
});

database.ref('age').set(27);
database.ref('location/city').set('New York');

// attributes
// height
// weight
database.ref('attributes').set({
  height: 5,
  weight: 150
});
