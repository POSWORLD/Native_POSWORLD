import axios from 'axios';
import { customAxios } from '../http/CustomAxios';

// export const postPhotoApi = async (photo) => {
//     try {
//         console.log('photo', photo);
//         const response = await customAxios('photo/2', 'post', photo);
//         console.log(response);
//         return response;
//     } catch (error) {
//         throw error;
//     }
// };

export const postPhotoApi = (photo) => {
    console.log('api ', photo);
    return axios.post('http://192.168.0.35:8001/photo/2', photo, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiYXV0aCI6IkF1dGhvcml0eS5ST0xFX1VTRVIiLCJleHAiOjE2NTYxMjcxNDJ9.gqoF_dYI9-BbbSkEhmITxsCzSaMK5vq0iZhnUf4xJzvQpL-441BWYxoJPVFVm7Y-Lg713tsKPlfQXy3wBlowKw`,
        },
    });
};

/* export const deletePhotos = async (photos, ids) => {
    try {
        const photoId = Number(ids.id);
        const response = await customAxios(`photo/${photoId}/${ids.myId}`, 'delete');
        if (response === true) {
            const delPhoto = await photos.filter((photo) => photo.id !== ids.id);
            return [...delPhoto];
        }
    } catch (error) {
        throw error;
    }
};

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
