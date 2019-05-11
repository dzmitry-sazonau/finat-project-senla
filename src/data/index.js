import fonoapi from 'fonoapi-nodejs';

const getPhonesWithApi = (value) => {
  function myCallback(queryString, data) {
    return new Promise()
      .then(data);
  }
  fonoapi.token = '04de6243c57ebb6c0c523e3abefc5b744fab1367832809cd';
  fonoapi.getLatest(myCallback, 100, value);
};

export default getPhonesWithApi;
