import { getHomeApi } from './homesApi';
import produce from 'immer';
import { call, put, takeLatest } from '@redux-saga/core/effects';
const READ_HOME = 'HOME/READ';
const READ_HOME_SUCCESS = 'HOME/READ_SUCCESS';
const READ_HOME_FAIL = 'HOME/READ_FAIL';
export const select = () => ({ type: READ_HOME });

const initialHome = {
    id: 0,
    home: {},
    loading: false,
    success: false,
    enableAccess: false,
};

const getHome = function* (action) {
    try {
        console.log('응답하라 오바');
        const result = yield call(getHomeApi);
        yield put({ type: READ_HOME_SUCCESS, data: result });
    } catch (err) {
        yield put({ type: READ_HOME_FAIL, data: err });
    }
};
export function* HomeSaga() {
    yield takeLatest(READ_HOME, getHome);
}

const homes = (state = initialHome, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case READ_HOME:
                draft.loading = true;
                break;
            case READ_HOME_SUCCESS:
                console.log(action);
                draft.home = action.data;
                draft.loading = false;
                draft.success = true;
                break;
            case READ_HOME_FAIL:
                draft.loading = false;
                break;
            default:
                return state;
        }
    });
export default homes;
