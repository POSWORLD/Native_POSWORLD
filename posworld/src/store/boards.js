import { call, put, takeLatest } from "redux-saga/effects";
import { deleteBoardByNum, getBoardByHomeId, insertBoard } from "./boardsApi";
const CREATE_BOARD_LOAD = "BOARD/CREATE_LOAD";
const CREATE_BOARD_SUCCESS = "BOARD/CREATE_SUCCESS";
const CREATE_BOARD_FAIL = "BOARD/CREATE_FAIL";
const SELECT_BOARD_LOAD = "BOARD/SELECT_LOAD";
const SELECT_BOARD_SUCCESS = "BOARD/SELECT_SUCCESS";
const SELECT_BOARD_FAIL = "BOARD/SELECT_FAIL";
const DELETE_BOARD_FAIL = "BOARD/DELETE_FAIL";
const DELETE_BOARD_LOAD = "BOARD/DELETE_LOAD";
const DELETE_BOARD_SUCCESS = "BOARD/DELETE_SUCCESS";
import produce from "immer";
export const createboard = (params) => ({ type: CREATE_BOARD_LOAD, params });
export const selectboard = (homeId) => ({ type: SELECT_BOARD_LOAD, homeId });
export const deleteboard = (num, boards) => ({
  type: DELETE_BOARD_LOAD,
  num,
  boards,
});
//saga
export function* BoardSaga() {
  yield takeLatest(CREATE_BOARD_LOAD, addBoard);
  yield takeLatest(SELECT_BOARD_LOAD, selectBoard);
  yield takeLatest(DELETE_BOARD_LOAD, deleteBoard);
}

const initialBoard = {
  board: {},
  loading: false,
  success: false,
  enableAccess: false,
};
function* addBoard(action) {
  try {
    console.log("insert");
    const result = yield call(insertBoard, action.params);
    yield put({ type: CREATE_BOARD_SUCCESS, data: result });
  } catch (err) {
    yield put({ type: CREATE_BOARD_FAIL, data: err });
  }
}
function* selectBoard(action) {
  try {
    const result = yield call(getBoardByHomeId, action.homeId);
    yield put({ type: SELECT_BOARD_SUCCESS, data: result });
  } catch (err) {
    yield put({ type: SELECT_BOARD_FAIL, data: err });
  }
}

function* deleteBoard(action) {
  try {
    const result = yield call(
      deleteBoardByNum,
      action.num,
      action.boards.board
    );

    yield put({ type: DELETE_BOARD_SUCCESS, data: result });
  } catch (err) {
    yield put({ type: DELETE_BOARD_FAIL, data: err });
  }
}

//reducer
const boards = (state = initialBoard, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CREATE_BOARD_LOAD:
        console.log("start insert");
        draft.loading = true;
        draft.success = false;
        break;
      case CREATE_BOARD_SUCCESS:
        console.log("success insert");
        draft.loading = false;
        draft.success = true;
        break;
      case CREATE_BOARD_FAIL:
        console.log("fail insert");
        draft.success = false;
        draft.loading = false;
        break;
      case SELECT_BOARD_LOAD:
        console.log("start select");
        draft.loading = true;
        draft.success = false;
        break;
      case SELECT_BOARD_SUCCESS:
        console.log("success select");
        draft.loading = false;
        draft.success = true;
        draft.board = action.data;
        break;
      case SELECT_BOARD_FAIL:
        console.log("fail select");
        draft.success = false;
        draft.loading = false;
        break;
      case DELETE_BOARD_LOAD:
        console.log("start delete");
        draft.loading = true;
        draft.success = false;
        break;
      case DELETE_BOARD_SUCCESS:
        console.log("success delete");
        draft.loading = false;
        draft.success = true;
        draft.board = action.data; //.filter(v => v.num !== action.data);
        break;
      case DELETE_BOARD_FAIL:
        console.log("fail delete");
        draft.success = false;
        draft.loading = false;
        break;
      default:
        return state;
    }
  });

export default boards;
