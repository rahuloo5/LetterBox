import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyD6PMn4c163Mo4wsjFJEeZ0laK_4GaAQz0',
  authDomain: 'letters-ec8dc.firebaseapp.com',
  databaseURL: 'https://letters-ec8dc.firebaseio.com',
  projectId: 'letters-ec8dc',
  storageBucket: 'letters-ec8dc.appspot.com',
  messagingSenderId: '99792810515',
  appId: '1:99792810515:web:40968063653e2fe8fcc5e6',
  measurementId: 'G-FGM79YEM5R',
});

const db = firebaseApp.firestore();

export default db;
