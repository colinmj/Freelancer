import * as firebase from 'firebase';

// what this does is it takes all of the named exports and calls it firebase

var config = {
  apiKey: 'AIzaSyAmu6YccqdRgBRveLWiuMwPJszabwmB7iA',
  authDomain: 'freelancer-fd087.firebaseapp.com',
  databaseURL: 'https://freelancer-fd087.firebaseio.com',
  projectId: 'freelancer-fd087',
  storageBucket: '',
  messagingSenderId: '652530607486'
};

console.log(process.env);

firebase.initializeApp(config);

const db = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { firebase, googleAuthProvider, facebookProvider, db as default };
