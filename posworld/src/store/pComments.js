import { takeLatest, call, put } from "redux-saga/effects";
import { selectPComment, postPComment, deletePComment } from "./pCommentsApi";
import produce from "immer";

export const CREATE_PCOMMENT = "PCOMMENT/CREATE";
export const CREATE_PCOMMENT_SUCCESS = "PCOMMENT/CREATE_SUCCESS";
export const CREATE_PCOMMENT_FAIL = "PCOMMENT/CREATE_FAIL";

export const SELECT_PCOMMENT = "PCOMMENT/SELECT";
export const SELECT_PCOMMENT_SUCCESS = "PCOMMENT/SELECT_SUCCESS";
export const SELECT_PCOMMENT_FAIL = "PCOMMENT/SELECT_FAIL";

export const DELETE_PCOMMENT = "PCOMMENT/DELETE";
export const DELETE_PCOMMENT_SUCCESS = "PCOMMENT/DELETE_SUCCESS";
export const DELETE_PCOMMENT_FAIL = "PCOMMENT/DELETE_FAIL";

//액션함수
const id = "1";
export const createPcomment = (params) => ({ type: CREATE_PCOMMENT, params });
export const selectPcomment = () => ({ type: SELECT_PCOMMENT, id });
export const deletePcomment = (id) => ({ type: DELETE_PCOMMENT, id });

const initialPcomment = {
  pid: 0,
  comments: {},
  loading: false,
  success: false,
  enableAccess: false,
};

//사가함수
export function* pCommentSaga() {
  yield takeLatest(CREATE_PCOMMENT, postPComment);
  yield takeLatest(SELECT_PCOMMENT, selectPComment);
  yield takeLatest(DELETE_PCOMMENT, deletePComment);
}

const pComments = (state = initialPcomment, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CREATE_PCOMMENT:
        draft.loading = true;
        draft.success = false;
        break;
      case CREATE_PCOMMENT_SUCCESS:
        draft.loading = false;
        draft.success = true;
        break;
      case CREATE_PCOMMENT_FAIL:
        draft.success = false;
        draft.loading = false;
        break;
      case SELECT_PCOMMENT:
        draft.loading = true;
        draft.success = false;
        break;
      case SELECT_PCOMMENT_SUCCESS:
        draft.loading = false;
        draft.success = true;
        console.log("action.data", action.data);
        draft.comments = action.data;
        break;
      case SELECT_PCOMMENT_FAIL:
        draft.success = false;
        draft.loading = false;
        break;
      default:
        return state;
    }
  });

export default pComments;
