import AsyncStorage from "@react-native-async-storage/async-storage";
import { takeLatest } from "redux-saga/effects";
import produce from "immer";
import {
  loginCheckValue,
  loginValue,
  updateUserValue,
  logoutValue,
  signUpValue,
} from "./usersApi";
import {
  INIT,
  LOGIN_SUCCESS,
  LOGIN,
  LOGIN_CHECK,
  LOGIN_CHECK_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  LOGOUT,
  LOGOUT_SUCCESS,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from "./actionType";

//액션 함수
export const init = () => ({ type: INIT });
export const login = (params) => ({ type: LOGIN, params });
export const loginCheck = (params) => ({ type: LOGIN_CHECK, params });
export const updateUser = (params) => ({ type: UPDATE_USER, params });
export const logout = () => ({ type: LOGOUT });
export const signUp = (params) => ({ type: SIGNUP, params });

//사가함수
export function* UserSaga() {
  yield takeLatest(LOGIN, loginValue);
  yield takeLatest(LOGIN_CHECK, loginCheckValue);
  yield takeLatest(UPDATE_USER, updateUserValue);
  yield takeLatest(LOGOUT, logoutValue);
  yield takeLatest(SIGNUP, signUpValue);
}

//초기상태
const initialUser = {
  data: new FormData(),
  loading: false,
  success: false,
  enableAccess: false, //
  isLogin: false,
  me: {},
  myId: {},
};

//reducer
const user = (state = initialUser, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case INIT:
        draft.loading = false;
        draft.success = false;
        draft.data = new FormData();
        break;
      case LOGIN_SUCCESS:
        console.log("로그인 Success");
        const token = action.data.accessToken;
        AsyncStorage.setItem("token", token);
        draft.isLogin = true;
        break;
      case LOGIN_CHECK_SUCCESS:
        console.log("로그인체크 Success");
        // console.log(action.data);
        draft.me = action.data;
        draft.myId = action.data.id;
        AsyncStorage.setItem("myId", `${action.data.id}`);
        AsyncStorage.setItem("homeId", `${action.data.id}`);
        break;
      case UPDATE_USER_SUCCESS:
        console.log("유저업데이트 Success");
        alert("수정에 성공했습니다.");
        break;
      case UPDATE_USER_FAIL:
        alert("수정에 실패했습니다.");
        break;
      case LOGOUT_SUCCESS:
        alert("로그아웃");
        AsyncStorage.clear();
        draft.isLogin = false;
        draft.me = {};
        break;
      case SIGNUP_SUCCESS:
        alert("회원가입이 완료되었습니다");
        break;
      case SIGNUP_FAIL:
        alert("회원가입에 실패했습니다.");
        break;
      default:
        return state;
    }
  });

export default user;
