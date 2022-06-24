import { customAxios } from '../http/CustomAxios';
export const getHomeApi = async (id) => {
    try {
        const id = 2;
        const response = await customAxios(`home/${id}`, 'get');
        console.log('response', response);
        return response;
    } catch (error) {
        throw error;
    }
};
