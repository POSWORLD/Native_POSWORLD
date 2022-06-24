import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

axios.defaults.baseURL = 'http://192.168.0.64:8001';
export const IMG_PATH = 'http://192.168.0.64:8001';
const getToken = async () => {
    return await AsyncStorage.getItem('token');
};
export const customAxios = async (url, method, data) => {
    const token =
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiYXV0aCI6IkF1dGhvcml0eS5ST0xFX1VTRVIiLCJleHAiOjE2NTYxMjQ5Mzh9.vVPDDcRqy7LWeKcvpI6IOpsO1Tnoqm9hAKOKCJOC7K0IdecMY9VjgZJzlya4ofht4gRT0UsXM5OYPps50EyTOA'; //await getToken();
    const response = await axios({
        url,
        method,
        data,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const fileAxios = async (url, method, data) => {
    const token =
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiYXV0aCI6IkF1dGhvcml0eS5ST0xFX1VTRVIiLCJleHAiOjE2NTYxMjQ5Mzh9.vVPDDcRqy7LWeKcvpI6IOpsO1Tnoqm9hAKOKCJOC7K0IdecMY9VjgZJzlya4ofht4gRT0UsXM5OYPps50EyTOA';
    const response = await axios({
        url,
        method,
        data,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};
