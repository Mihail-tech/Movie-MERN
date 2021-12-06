import service from '../service';

const setting = async (data) => {
    return await service.post('/setting', { data});
};

export default setting;