import fetch from 'isomorphic-fetch';
import database from '../firebase/database';

const getPublicConfig = () => fetch(
  'https://relish-test.firebaseio.com/publicConfig.json',
  {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'multipart/form-data',
    },
  }
);

const createNewEdition = editionName => database.ref(`/editions/${editionName}`).set({
  editionName,
  cratedAt: Date.now(),
});

export default {
  getPublicConfig,
  createNewEdition,
};
