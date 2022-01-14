import service from '../service';

const setting = async (data, token) => {
    return await service.put('/setting',  {
        headers: {
          Authorization: `Bearer ${token}`,
        }, data
      });
};

const updatePic = async (FileReader, token) => {
  const {result} = FileReader;
  const data = {data:result}
    return await service.put('/setting/updatePic',  {
        headers: {
          Authorization: `Bearer ${token}`,
        }, data
      });
};

export default {
    setting, 
    updatePic
};