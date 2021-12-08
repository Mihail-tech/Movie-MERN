import service from '../service';

const setting = async (data, token) => {
    return await service.post('/setting',  {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }, { data});
};

export default setting;