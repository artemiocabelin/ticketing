import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {

    return axios.create({
      baseURL: 'http://www.some-random-test-app.xyz',
      headers: req.headers
    });

  } else {
    return axios.create({
      baseURL: '/'
    });
  }
};