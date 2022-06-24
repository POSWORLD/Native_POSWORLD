import { customAxios } from '../http/CustomAxios';

export const insertBoard = async board => {
   console.log('myId', board);
   try {
      const response = await customAxios(`/board/${board.homeId}/${board.userId}`, 'post', board);
      console.log(response);
      return response;
   } catch (error) {
      throw error;
   }
};

export const getBoardByHomeId = async homeId => {
   try {
      const response = await customAxios(`/board/${homeId}`, 'get');
      return response;
   } catch (error) {
      throw error;
   }
};
