import request from './request';

const get = async (url, options) => {
  return await request({ ...options, url, method: 'GET' });
};

const post = async (url, options) => {
  console.log(options, 'options')
  return await request({ ...options, url, method: 'POST' });
};

const put = async (url, options) => {
  return await request({ ...options, url, method: 'PUT'});
}

export default {
  get,
  post,
  put
};
