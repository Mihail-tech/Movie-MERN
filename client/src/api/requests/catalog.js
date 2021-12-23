import service from '../service';

const getCategories = async (token) => {
  return await service.get('/categories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const getFilms = async (token, query,) => {
  return await service.get(`/films${query}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const filmId = async (token, id) => {
  return await service.get(`/films/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const comment = async ( data, token) => {
  console.log(data, 'data url for back')
  return await service.post(`/films/comment`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }, data
  })
};

const comments = async ( id, token) => {
  console.log(id, 'facking send for back')
  return await service.get(`/films/comments/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
};

export default {
  getCategories,
  getFilms,
  filmId,
  comment,
  comments
};
