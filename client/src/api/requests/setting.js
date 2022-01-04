import service from '../service';

const setting = async (data, token) => {
  console.log(data, 'send on back')
    return await service.put('/setting',  {
        headers: {
          Authorization: `Bearer ${token}`,
        }, data
      });
};

const updatePic = async (FileReader, token) => {
  // console.log(FileReader, 'send on back2')
  const {result} = FileReader;
  const data = {data:result}
  console.log(data, 'data2')
  console.log(result, 'result')
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