import { customAxios } from "../http/CustomAxios";
import { useSelector } from "react-redux";

export const getPhotoApi = async (id) => {
  try {
    const response = await customAxios(`photo/${id}`, "get");
    return response;
  } catch (error) {
    throw error;
  }
};

export const getPhotoByIdApi = async (pid) => {
  try {
    console.log("이건??");

    console.log("pid", pid, "확인");
    const response = await customAxios(`photo/detail/${pid.pid}`, "get");
    return response;
  } catch (error) {
    throw error;
  }
};
