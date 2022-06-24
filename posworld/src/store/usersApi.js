import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { call, put } from "redux-saga/effects";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_CHECK_SUCCESS,
  LOGIN_CHECK_FAIL,
} from "./actionType";

export const loginValue = function* (action) {
  console.log("loginValue들어옴");
  try {
    const result = yield call(loginApi, action);
    yield put({ type: LOGIN_SUCCESS, data: result.data }); //put : 특성 액션을 디스패치
  } catch (err) {
    yield put({ type: LOGIN_FAIL, data: err });
  }
};

export const loginApi = (params) => {
  console.log("loginApi들어옴");
  const member = { userid: params.params.userid, pw: params.params.pw };
  return axios.post("http://192.168.0.82:8001/auth/login", member);
};

export const loginCheckValue = function* (action) {
  console.log("loginCheckValue들어옴");
  try {
    const result = yield call(loginCheckApi, action);
    yield put({ type: LOGIN_CHECK_SUCCESS, data: result.data });
  } catch (err) {
    yield put({ type: LOGIN_CHECK_FAIL, data: err });
  }
};

export const loginCheckApi = (action) => {
  console.log("loginCheckApi들어옴");
  return axios.get("http://192.168.0.82:8001/member/me", {
    headers: {
      Authorization: `Bearer ${action.params}`,
    },
  });
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
