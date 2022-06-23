import { takeLatest, call, put } from "redux-saga/effects";
import { postPCommentApi } from "./pCommentsApi";
const CREATE_PCOMMENT = "PCOMMENT/CREATE";
const CREATE_PCOMMENT_SUCCESS = "PCOMMENT/CREATE_SUCCESS";
const CREATE_PCOMMENT_FAIL = "PCOMMENT/CREATE_FAIL";
import produce from "immer";

//액션함수
export const createPcomment = (params) => ({ type: CREATE_PCOMMENT, params });

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
}

const postPComment = function* (action) {
  try {
    console.log("가니");
    console.log(action);
    const result = yield call(postPCommentApi, action.params);
    //console.log(result);
    yield put({ type: CREATE_PCOMMENT_SUCCESS, data: result });
  } catch (err) {
    yield put({ type: CREATE_PCOMMENT_FAIL, data: err });
  }
};

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
      default:
        return state;
    }
  });

export default pComments;
