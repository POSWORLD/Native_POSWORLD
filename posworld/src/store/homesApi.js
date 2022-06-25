import AsyncStorage from "@react-native-async-storage/async-storage";
import { customAxios } from "../http/CustomAxios";
export const getHomeApi = async (id) => {
  try {
    const response = await customAxios(`home/${Number(id.id.id)}`, "get");
    return response;
  } catch (error) {
    throw error;
  }
};
export const updateHomeContentApi = async (home) => {
  try {
    const id = AsyncStorage.getItem("homeId");
    const response = await customAxios(`/home/content/${id}`, "put", home);
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateHomePhotoApi = async (home) => {
  try {
    const id = AsyncStorage.getItem("homeId");
    const response = await customAxios(`/home/photo/${id}`, "put", home);
    return response;
  } catch (error) {
    throw error;
  }
};
