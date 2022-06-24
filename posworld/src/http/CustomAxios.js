import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

axios.defaults.baseURL = 'http://192.168.0.64:8001';
export const IMG_PATH = 'http://192.168.0.64:8001';
const getToken = async () => {
    return await AsyncStorage.getItem('token');
};
export const customAxios = async (url, method, data) => {
    const token =
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiYXV0aCI6IkF1dGhvcml0eS5ST0xFX1VTRVIiLCJleHAiOjE2NTYwNjYwMTd9.Rg3AKL_vOyDZdt3s_9xKNOTFET53diUO7BBIWoOOVpg1-4fgf47tSZq2jAICClyzeIF_1P_j4Q9fae6b2KJTfw';
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
    const token = await getToken();
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
