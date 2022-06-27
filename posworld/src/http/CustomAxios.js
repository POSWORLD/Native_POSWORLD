import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

axios.defaults.baseURL = "http://192.168.0.38:8001";
export const IMG_PATH = "http://192.168.0.38:8001";
const getToken = async () => {
  return await AsyncStorage.getItem("token");
};
export const customAxios = async (url, method, data) => {
  const token = await getToken();
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
