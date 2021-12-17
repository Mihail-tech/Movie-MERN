import service from '../service';

const setting = async (data, token) => {
  console.log(data, 'send on back')
    return await service.put('/setting',  {
        headers: {
          Authorization: `Bearer ${token}`,
        }, data
      });
};

const updatePic = async (formData, token) => {
  console.log(formData, 'send on back')
    return await service.put('/setting/updatePic',  {
        headers: {
          Authorization: `Bearer ${token}`,
        }, formData
      });
};

export default {setting, 
    updatePic
};