import { call, put, takeLatest } from 'redux-saga/effects';
import { insertBoard } from './boardsApi';
const CREATE_BOARD_LOAD = 'BOARD/CREATE';
const CREATE_BOARD_SUCCESS = 'BOARD/CREATE_SUCCESS';
const CREATE_BOARD_FAIL = 'BOARD/CREATE_FAIL';
import produce from 'immer';
export const createBoard = params => ({ type: CREATE_BOARD_LOAD, params });

//saga
export function* BoardSaga() {
   yield takeLatest(CREATE_BOARD_LOAD, addBoard);
}

const initialBoard = {
   board: {},
   loading: false,
   success: false,
   enableAccess: false,
};
function* addBoard(action) {
   try {
      console.log('insert');
      const result = yield call(insertBoard, action.params);
      yield put({ type: CREATE_BOARD_SUCCESS, data: result });
   } catch (err) {
      yield put({ type: CREATE_BOARD_FAIL, data: err });
   }
}
//reducer
const boards = (state = initialBoard, action) =>
   produce(state, draft => {
      switch (action.type) {
         case CREATE_BOARD_LOAD:
            //console.log('start');
            draft.loading = true;
            draft.success = false;
            break;
         case CREATE_BOARD_SUCCESS:
            //console.log('success');
            draft.loading = false;
            draft.success = true;
            break;
         case CREATE_BOARD_FAIL:
            //console.log('fail');
            draft.success = false;
            draft.loading = false;
            break;
         default:
            return state;
      }
   });
export default boards;
