import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCQoXb8r2IvUvUbLrdl7EOf3DZW4lcI5e8',
  authDomain: 'relish-test.firebaseapp.com',
  databaseURL: 'https://relish-test.firebaseio.com',
  projectId: 'relish-test',
  storageBucket: 'relish-test.appspot.com',
  messagingSenderId: '611970960923',
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const fetchConfig = () =>
  new Promise((resolve) => {
    database.ref('/config').on('value', (snapshot) => {
      const recievedConfig = snapshot.val();
      return resolve(recievedConfig);
    });
  });

const setConfig = newConfigValues =>
  new Promise((resolve, reject) => {
    database.ref('/config').set(newConfigValues)
      .catch(reject)
      .then(() => {
        resolve();
      });
  });

export default {
  fetchConfig,
  setConfig,
};
