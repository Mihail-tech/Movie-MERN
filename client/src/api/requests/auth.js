import service from '../service';

const register = async (data) => {
  return await service.post('/users/register', { data });
};

const login = async (data) => {
  return await service.post('/users/login', { data });
};

export default {
  register,
  login,
};
