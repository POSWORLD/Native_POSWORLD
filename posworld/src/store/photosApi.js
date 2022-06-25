import { customAxios } from '../http/CustomAxios';

export const getPhotoApi = async (id) => {
    try {
        const response = await customAxios(`photo/${id}`, 'get');
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
};

export const getPhotoByIdApi = async (pid) => {
    try {
        const response = await customAxios(`photo/detail/${pid.pid}`, 'get');
        return response;
    } catch (error) {
        throw error;
    }
};

export const postPhotoApi = async (photo) => {
    try {
        const response = await customAxios('photo/2', 'post', photo);
        return response;
    } catch (error) {
        throw error;
    }
};

export const deletePhotoApi = async (pid) => {
    try {
        const response = await customAxios(`photo/${pid.pid}/2`, 'delete');
        return response;
    } catch (error) {
        throw error;
    }
};
