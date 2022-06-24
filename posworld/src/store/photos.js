import { getPhotoApi, getPhotoByIdApi } from "./photosApi";
import produce from "immer";
import { call, put, takeLatest } from "redux-saga/effects";
import { useSelector } from "react-redux";

export const SELECT_PHOTO = "PHOTO/SELECT";
export const SELECT_PHOTO_SUCCESS = "PHOTO/SELECT_SUCCESS";
export const SELECT_PHOTO_FAIL = "PHOTO/SELECT_FAIL";

export const SELECT_PHOTO_BY_ID = "DETAIL/SELECT";
export const SELECT_PHOTO_BY_ID_SUCCESS = "DETAIL/SELECT_SUCCESS";
export const SELECT_PHOTO_BY_ID_FAIL = "DETAIL/SELECT_FAIL";

export const SET_PID = "PID/SET";
export const SET_PID_SUCCESS = "PID/SET_SUCCESS";
export const SET_PID_FAIL = "PID/SET_FAIL";

const id = "1";
export const selectPhoto = () => ({ type: SELECT_PHOTO, id });
export const selectPhotoById = (pid) => ({ type: SELECT_PHOTO_BY_ID, pid });
export const setPid = (id) => ({ type: SET_PID, id });

const initialPhoto = {
  pid: 1,
  photo: {},
  photoDetail: [],
  loading: false,
  success: false,
  enableAccess: false,
};

//사가함수
export function* photoSaga() {
  yield takeLatest(SELECT_PHOTO, getPhoto);
  yield takeLatest(SELECT_PHOTO_BY_ID, getPhotoById);
  yield takeLatest(SET_PID, createPid);
}

const getPhotoById = function* (pid) {
  try {
    console.log("pidsss", pid);
    const result = yield call(getPhotoByIdApi, pid);
    console.log("result", result);
    yield put({ type: SELECT_PHOTO_BY_ID_SUCCESS, data: result });
  } catch (err) {
    yield put({ type: SELECT_PHOTO_BY_ID_FAIL, data: err });
  }
};

const createPid = function* (action) {
  try {
    yield put({ type: SET_PID_SUCCESS, data: action.id });
  } catch (err) {
    yield put({ type: SET_PID_FAIL, data: err });
  }
};

export const getPhoto = function* (action) {
  try {
    const result = yield call(getPhotoApi, action.id);
    yield put({ type: SELECT_PHOTO_SUCCESS, data: result });
  } catch (err) {
    yield put({ type: SELECT_PHOTO_FAIL, data: err });
  }
};

const photos = (state = initialPhoto, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SELECT_PHOTO:
        draft.success = false;
        draft.loading = true;
        break;
      case SELECT_PHOTO_SUCCESS:
        draft.success = true;
        draft.loading = false;
        draft.photo = action.data;
        break;
      case SELECT_PHOTO_FAIL:
        draft.success = false;
        draft.loading = false;
        break;
      case SELECT_PHOTO_BY_ID:
        draft.success = false;
        draft.loading = true;
        break;
      case SELECT_PHOTO_BY_ID_SUCCESS:
        draft.success = true;
        draft.loading = false;
        console.log("action", action);
        draft.photoDetail = action.data;
        break;
      case SELECT_PHOTO_BY_ID_FAIL:
        draft.success = false;
        draft.loading = false;
        break;
      case SET_PID:
        draft.loading = true;
        break;
      case SET_PID_SUCCESS:
        draft.loading = false;
        console.log(action);
        draft.pid = action.data;
        break;
      default:
        return state;
    }
  });
export default photos;
