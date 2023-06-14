import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBUvuqEAUAwnwQGi5jXfjrB4sKd53ctPBY',
  authDomain: 'pokedex-bd24f.firebaseapp.com',
  projectId: 'pokedex-bd24f',
  databaseURL: 'https://pokedex-bd24f-default-rtdb.firebaseio.com',
  storageBucket: 'pokedex-bd24f.appspot.com',
  messagingSenderId: '864272135652',
  appId: '1:864272135652:web:9ed701679c314d4756c3f1',
  measurementId: 'G-CC6C1ZT8E0',
};

firebase.initializeApp(firebaseConfig);

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

const db = getDatabase();

export {
  uiConfig,
  firebase,
  db,
  ref,
  set,
};
