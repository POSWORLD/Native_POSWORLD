import AsyncStorage from "@react-native-async-storage/async-storage";
import { takeLatest } from "redux-saga/effects";
import produce from "immer";
import { loginCheckValue, loginValue, updateUserValue } from "./usersApi";
import {
  INIT,
  LOGIN_SUCCESS,
  LOGIN,
  LOGIN_CHECK,
  LOGIN_CHECK_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
} from "./actionType";

//액션 함수
export const init = () => ({ type: INIT });
export const login = (params) => ({ type: LOGIN, params });
export const loginCheck = (params) => ({ type: LOGIN_CHECK, params });
export const updateUser = (params) => ({ type: UPDATE_USER, params });

//사가함수
export function* UserSaga() {
  yield takeLatest(LOGIN, loginValue);
  yield takeLatest(LOGIN_CHECK, loginCheckValue);
  yield takeLatest(UPDATE_USER, updateUserValue);
}

//초기상태
const initialUser = {
  data: new FormData(),
  loading: false,
  success: false,
  enableAccess: false, //
  isLogin: false,
  me: {},
  other: {},
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
        break;
      case UPDATE_USER_SUCCESS:
        console.log("유저업데이트 Success");
      default:
        return state;
    }
  });

export default user;
