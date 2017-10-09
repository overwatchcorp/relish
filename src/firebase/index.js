import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCQoXb8r2IvUvUbLrdl7EOf3DZW4lcI5e8',
  authDomain: 'relish-test.firebaseapp.com',
  databaseURL: 'https://relish-test.firebaseio.com',
  projectId: 'relish-test',
  storageBucket: 'relish-test.appspot.com',
  messagingSenderId: '611970960923',
};

firebase.initializeApp(config);

export default firebase;
