import axios from 'axios/index';

const instance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const request = async config => {
  return await instance.request(config);
};

export default request;
