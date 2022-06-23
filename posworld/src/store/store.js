import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import boards, { BoardSaga } from './boards';
const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
   boards,
});
const initialState = {};

const store = configureStore({
   reducer,
   middleware: [sagaMiddleware],
   devTools: true,
   preloadedState: initialState,
});

sagaMiddleware.run(rootSaga);

export function* rootSaga() {
   yield all([BoardSaga()]); // all : 함수 내부 배열에 등록 된 사가 함수들을 리덕스 사가 미들웨어에 등록, 등록된 함수가 동시에 실행될 수 있게 처리
}

export default store;
