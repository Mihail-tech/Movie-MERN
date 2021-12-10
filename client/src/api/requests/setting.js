import service from '../service';

const setting = async (data, token) => {
    return await service.post('/setting',  {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }, { data});
};

const updatePic = async (formData, token) => {
    return await service.post('/setting/updatePic',  {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }, { formData});
};

export default {setting, 
    updatePic
};