import { customAxios } from '../http/CustomAxios';

export const insertBoard = async board => {
   console.log('myId', board);
   try {
      const response = await customAxios(`/board/${board.homeId}/${myId}`, 'post', board);
      console.log('response');
      console.log(response);
      return response;
   } catch (error) {
      throw error;
   }
};
