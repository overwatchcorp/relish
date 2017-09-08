import fetch from 'isomorphic-fetch';

const getPublicConfig = () => fetch('https://relish-test.firebaseio.com/publicConfig');

export default {
  getPublicConfig,
};
