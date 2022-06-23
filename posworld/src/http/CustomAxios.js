import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

axios.defaults.baseURL = "http://192.168.0.82:8001";
export const IMG_PATH = "http://192.168.0.82:8001";
const getToken = async () => {
  return await AsyncStorage.getItem("token");
};
export const customAxios = async (url, method, data) => {
  const token =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiYXV0aCI6IkF1dGhvcml0eS5ST0xFX1VTRVIiLCJleHAiOjE2NTYwNjA2NTZ9.72sEZRjLK68aneEomvk3E22lYhtoGkkMbglOINFL42FoulbUAuwY0MLReEIa3NxmlEaLdFHgGcGtlW_dT-t31Q"; //await getToken();
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
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
