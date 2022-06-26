import { customAxios } from '../http/CustomAxios';
export const getHomeApi = async (id) => {

    try {
        const response = await customAxios(`home/${id}`, 'get');
        console.log('response', response);
        return response;
    } catch (error) {
        throw error;
    }
};

export const updateHomeContentApi = async (home,id) => {
    try {
        const response = await customAxios(`/home/content/${id}`, 'put', home);
        return response;
    } catch (error) {
        throw error;
    }
};


export const updateHomePhotoApi = async (home,id) => {
    try {
        const response = await customAxios(`/home/photo/${id}`, 'put', home);
        return response;
    } catch (error) {
        throw error;
    }
};
