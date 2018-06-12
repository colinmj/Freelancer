import * as firebase from 'firebase';

// what this does is it takes all of the named exports and calls it firebase

const config = {
  apiKey: 'AIzaSyAmu6YccqdRgBRveLWiuMwPJszabwmB7iA',
  authDomain: 'freelancer-fd087.firebaseapp.com',
  databaseURL: 'https://freelancer-fd087.firebaseio.com',
  projectId: 'freelancer-fd087',
  storageBucket: 'freelancer-fd087.appspot.com',
  messagingSenderId: '652530607486'
};

firebase.initializeApp(config);

const db = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { firebase, googleAuthProvider, facebookProvider, db as default };

// FIREBASE_API_KEY=AIzaSyAmu6YccqdRgBRveLWiuMwPJszabwmB7iA
// FIREBASE_AUTH_DOMAIN=freelancer-fd087.firebaseapp.com
// FIREBASE_DATABASE_URL=https://freelancer-fd087.firebaseio.com
// FIREBASE_PROJECT_ID=freelancer-fd087
// FIREBASE_STORAGE-BUCKET=freelancer-fd087.appspot.com
// FIREBASE_MESSAGING_SENDER_ID=652530607486
