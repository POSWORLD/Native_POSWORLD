
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { call, put } from "redux-saga/effects";
import { customAxios, fileAxios } from "../http/CustomAxios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_CHECK_SUCCESS,
  LOGIN_CHECK_FAIL,
} from "./actionType";

export const loginValue = function* (action) {
  // console.log("loginValue들어옴");
  try {
    const result = yield call(loginApi, action);
    yield put({ type: LOGIN_SUCCESS, data: result }); //put : 특성 액션을 디스패치
  } catch (err) {
    yield put({ type: LOGIN_FAIL, data: err });
  }
};

const loginApi = (params) => {
  // console.log("loginApi들어옴");
  const member = { userid: params.params.userid, pw: params.params.pw };
  return customAxios("/auth/login", "post", member);
};

export const loginCheckValue = function* (action) {
  // console.log("loginCheckValue들어옴");
  try {
    const result = yield call(loginCheckApi, action);
    yield put({ type: LOGIN_CHECK_SUCCESS, data: result });
  } catch (err) {
    yield put({ type: LOGIN_CHECK_FAIL, data: err });
  }
};

const loginCheckApi = (action) => {
  // console.log("loginCheckApi들어옴");
  return customAxios("/member/me", "get");
};

export const updateUserValue = function* (action) {
  console.log("updateUserValue들어옴");
  console.log(action.params);
  try {
    let filePath = "";
    const { userid, img, file, name } = action.params;
    let uploadFile = new FormData();
    uploadFile.append("file", file);
    if (file) {
      filePath = fileAxios("/upload", "post", uploadFile);
    }
    const user = {
      userId: Number(myId),
      name,
      prophoto: filePath ? filePath : img,
    };
    const result = yield call(updateUserApi, action);
  } catch {}
};

const updateUserApi = (action) => {
  // console.log("updateUserApi들어옴");
};

// export const idCheckApi = async (user) => {
//   const response = await axios({
//     url: "http://localhost:8001/auth/checkId",
//     method: "post",
//     data: user,
//   });
//   return response.data;
// };

// export const insertUserApi = async (user) => {
//   return await customAxios("/auth/signup", "post", user);
// };

// export const updateUserApi = async (user) => {
//   const response = await axios({
//     url: "http://localhost:8001/member/name",
//     method: "post",
//     data: user,
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   });
//   return response.data;
// };

// export const getUserCountApi = async () => {
//   const response = await axios({
//     url: "http://localhost:8001/member/count",
//     method: "get",
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   });
//   return response.data;
// };

// export const logoutApi = async (userId) => {
//   return true;
// };

// export const getUserApi = async (id) => {
//   const response = await axios({
//     url: `http://localhost:8001/member/${id}`,
//     method: "get",
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   });
//   return response.data;
// };

// export const deleteUserApi = async (id) => {
//   const response = await axios({
//     url: `http://localhost:8001/member/${id}`,
//     method: "delete",
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   });
//   return response.data;
// };
