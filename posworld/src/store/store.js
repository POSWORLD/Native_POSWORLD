import { all } from "redux-saga/effects";
import user, { UserSaga } from "./user";
import createSagaMiddleware from "redux-saga";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

//saga 미들웨어 생성
const sagaMiddleware = createSagaMiddleware();

// 여러 상태값을 변경하는 리듀서들을 하나의 리듀서 함수로 합친다.
const reducer = combineReducers({
  user,
});

export default configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

// 여러 사가함수들을 연결해 주어 사가 함수가 액션을 인식할 수 있게 해준다.
export function* rootSaga() {
  yield all([UserSaga()]); // all : 함수 내부 배열에 등록 된 사가 함수들을 리덕스 사가 미들웨어에 등록, 등록된 함수가 동시에 실행될 수 있게 처리
}

//사가 미들웨어에서 통합 사가 함수를 실행
sagaMiddleware.run(rootSaga);
