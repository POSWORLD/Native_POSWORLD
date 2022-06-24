
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pComments from "./pComments";
import photos, { photoSaga } from "./photos";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import user, { UserSaga } from "./user";
import homes from './homes';
import { HomeSaga } from './homes';
import boards, { BoardSaga } from './boards';
import { pCommentSaga } from "./pComments";

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
  pComments,
  photos,
  boards,
  homes,
   user,
});
const initialState = {};


export default configureStore({
  reducer,
  middleware: [sagaMiddleware],

  devTools: true,
   preloadedState: initialState,
});

export function* rootSaga() {
  yield all([pCommentSaga(), photoSaga(),BoardSaga(),HomeSaga(),UserSaga()]); // all : 함수 내부 배열에 등록 된 사가 함수들을 리덕스 사가 미들웨어에 등록, 등록된 함수가 동시에 실행될 수 있게 처리
}

sagaMiddleware.run(rootSaga);
