import { getPhoto } from "./photosApi";
import produce from "immer";
import { takeLatest } from "redux-saga/effects";

export const SELECT_PHOTO = "PHOTO/SELECT";
export const SELECT_PHOTO_SUCCESS = "PHOTO/SELECT_SUCCESS";
export const SELECT_PHOTO_FAIL = "PHOTO/SELECT_FAIL";

export const SELECT_PHOTO_BY_ID = "DETAIL/SELECT";
export const SELECT_PHOTO_BY_ID_SUCCESS = "DETAIL/SELECT_SUCCESS";
export const SELECT_PHOTO_BY_ID_FAIL = "DETAIL/SELECT _FAIL";

const id = "1";
export const selectPhoto = () => ({ type: SELECT_PHOTO, id });

const initialPhoto = {
  pid: 0,
  photo: {},
  loading: false,
  success: false,
  enableAccess: false,
};

//사가함수
export function* photoSaga() {
  yield takeLatest(SELECT_PHOTO, getPhoto);
}

const photos = (state = initialPhoto, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SELECT_PHOTO:
        draft.success = false;
        draft.loading = true;
        break;
      case SELECT_PHOTO_SUCCESS:
        console.log("성공");
        draft.success = true;
        draft.loading = false;
        draft.photo = action.data;
        break;
      case SELECT_PHOTO_FAIL:
        console.log("fail");
        draft.success = false;
        draft.loading = false;
        break;
      default:
        return state;
    }
  });
export default photos;
