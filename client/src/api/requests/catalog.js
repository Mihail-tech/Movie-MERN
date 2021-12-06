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

const filmId = async (token, id, data) => {
  return await service.get(`/films/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }, {data});
};

const comment = async (id, data) => {
  return await service.post(`/films/${id}/comment`, {data})
};

export default {
  getCategories,
  getFilms,
  filmId,
  comment
};
