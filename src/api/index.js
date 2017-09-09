import fetch from 'isomorphic-fetch';

const getPublicConfig = () => fetch(
  'https://relish-test.firebaseio.com/publicConfig.json',
  {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'multipart/form-data',
    },
  });

export default {
  getPublicConfig,
};
