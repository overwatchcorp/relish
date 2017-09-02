import firebaseApp from './firebase';

const database = firebaseApp.database();

const setConfig = newConfigValues =>
  new Promise((resolve, reject) => {
    database.ref('/config').set(newConfigValues)
      .catch(reject)
      .then(() => {
        resolve();
      });
  });

export default setConfig;
