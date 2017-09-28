import * as firebase from 'firebase';
import config from '../config/keys'

firebase.initializeApp(config.firebase);

firebase.database().ref().set({
  name: 'Shayne Meyer'
});
