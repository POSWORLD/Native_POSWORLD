import AsyncStorage from "@react-native-async-storage/async-storage";
import { takeLatest } from "redux-saga/effects";
import produce from "immer";
import { loginCheckValue, loginValue } from "./usersApi";
import {
  INIT,
  LOGIN_SUCCESS,
  LOGIN,
  LOGIN_CHECK,
  LOGIN_CHECK_SUCCESS,
} from "./actionType";

//액션 함수
export const init = () => ({ type: INIT });
export const login = (params) => ({ type: LOGIN, params });
export const loginCheck = (params) => ({ type: LOGIN_CHECK, params });

//사가함수
export function* UserSaga() {
  yield takeLatest(LOGIN, loginValue);
  yield takeLatest(LOGIN_CHECK, loginCheckValue);
}

//초기상태
const initialUser = {
  data: new FormData(),
  loading: false,
  success: false,
  enableAccess: false, //
  isLogin: false,
  myToken: "",
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
        console.log("p(login)들어옴");
        const token = action.data.accessToken;
        AsyncStorage.setItem("token", token);
        draft.myToken = action.data.accessToken;
        draft.isLogin = true;
        break;
      case LOGIN_CHECK_SUCCESS:
        console.log("p(logincheck)들어옴");
        console.log(action.data);
      default:
        return state;
    }
  });

export default user;
