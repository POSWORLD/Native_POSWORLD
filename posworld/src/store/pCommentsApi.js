import { customAxios } from "../http/CustomAxios";
import { call, put } from "redux-saga/effects";
import {
  CREATE_PCOMMENT_SUCCESS,
  CREATE_PCOMMENT_FAIL,
  SELECT_PCOMMENT_SUCCESS,
  SELECT_PCOMMENT_FAIL,
  DELETE_PCOMMENT_SUCCESS,
  DELETE_PCOMMENT_FAIL,
} from "../store/pComments";

export const postPComment = function* (action) {
  try {
    const result = yield call(postPCommentApi, action.params);
    //console.log(result);
    yield put({ type: CREATE_PCOMMENT_SUCCESS, data: result });
  } catch (err) {
    yield put({ type: CREATE_PCOMMENT_FAIL, data: err });
  }
};

export const postPCommentApi = async (pComment) => {
  try {
    console.log("pComment", pComment);
    const response = await customAxios("pComment/", "post", pComment);
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const selectPComment = function* (action) {
  try {
    console.log(action);
    const result = yield call(selectPCommentApi, action.id);
    console.log("result", result);
    yield put({ type: SELECT_PCOMMENT_SUCCESS, data: result });
  } catch (err) {
    yield put({ type: SELECT_PCOMMENT_FAIL, data: err });
  }
};

export const selectPCommentApi = async (pid) => {
  try {
    console.log("pid", pid);
    const response = await customAxios(`pComment/${Number(pid)}`, "get");
    console.log("response", response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const deletePComment = function* (id) {
  try {
    console.log(id);
    const result = yield call(deletePCommentApi, id);
    console.log("result", result);
    yield put({ type: SELECT_PCOMMENT_SUCCESS, data: result });
  } catch (err) {
    yield put({ type: SELECT_PCOMMENT_FAIL, data: err });
  }
};

export const deletePCommentApi = async (id) => {
  try {
    console.log("pid", id);
    const response = await customAxios(`pComment/${Number(pid)}`, "get");
    console.log("response", response);
    return response;
  } catch (error) {
    throw error;
  }
};
