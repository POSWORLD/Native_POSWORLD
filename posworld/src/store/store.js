import { combineReducers, configureStore } from '@reduxjs/toolkit';
import homes from './homes';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { HomeSaga } from './homes';

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
    homes,
});

export default configureStore({
    reducer,
    middleware: [sagaMiddleware],
});

export function* rootSaga() {
    yield all([HomeSaga()]); // all : 함수 내부 배열에 등록 된 사가 함수들을 리덕스 사가 미들웨어에 등록, 등록된 함수가 동시에 실행될 수 있게 처리
}

sagaMiddleware.run(rootSaga);
