import { customAxios } from "../http/CustomAxios";
import { call, put } from "redux-saga/effects";
import { SELECT_PHOTO_FAIL, SELECT_PHOTO_SUCCESS } from "./photos";

export const getPhoto = function* (action) {
  try {
    const result = yield call(getPhotoApi, action.id);
    yield put({ type: SELECT_PHOTO_SUCCESS, data: result });
  } catch (err) {
    yield put({ type: SELECT_PHOTO_FAIL, data: err });
  }
};

export const getPhotoApi = async (id) => {
  try {
    const response = await customAxios(`photo/${id}`, "get");

    return response;
  } catch (error) {
    throw error;
  }
};
