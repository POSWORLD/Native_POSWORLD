import axios from 'axios';
import { customAxios } from '../http/CustomAxios';

export const postPhotoApi = async (photo) => {
    try {
        const response = await customAxios('photo/2', 'post', photo);
        return response;
    } catch (error) {
        throw error;
    }
};

export const deletePhotoApi = async (id) => {
    try {
        const response = await customAxios(`photo/${Number(id)}/2`, 'get');
        return response;
    } catch (error) {
        throw error;
    }
};

/*
export const getPhotoById = async (id) => {
    try {
        const response = await customAxios(`photo/${id}`, 'get');
        return response;
    } catch (error) {
        throw error;
    }
};

export const getPhotoByPhotoId = async (id) => {
    try {
        const response = await customAxios(`photo/detail/${id}`, 'get');

        return response;
    } catch (error) {
        throw error;
    }
};
 */
