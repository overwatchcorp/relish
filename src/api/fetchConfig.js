import firebaseApp from './firebase';

const database = firebaseApp.database();

const fetchConfig = () =>
  new Promise((resolve) => {
    database.ref('/config').on('value', (snapshot) => {
      const recievedConfig = snapshot.val();
      return resolve(recievedConfig);
    });
  });

export default fetchConfig;
