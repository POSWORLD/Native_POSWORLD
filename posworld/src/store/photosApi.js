import { customAxios } from '../http/CustomAxios';
import { useSelector } from 'react-redux';

export const getPhotoApi = async id => {
   try {
      const response = await customAxios(`photo/${id}`, 'get');

      return response;
   } catch (error) {
      throw error;
   }
};

export const getPhotoByIdApi = async pid => {
   try {
      const response = await customAxios(`photo/detail/${pid.pid}`, 'get');
      return response;
   } catch (error) {
      throw error;
   }
};
export const postPhotoApi = async photo => {
   try {
      const response = await customAxios('photo/2', 'post', photo);
      return response;
   } catch (error) {
      throw error;
   }
};

export const deletePhotoApi = async id => {
   try {
      const response = await customAxios(`photo/${Number(id)}/2`, 'get');
      return response;
   } catch (error) {
      throw error;
   }
};
