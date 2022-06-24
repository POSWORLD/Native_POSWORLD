import { getHomeApi, updateHomeContentApi, updateHomePhotoApi } from './homesApi';
import produce from 'immer';
import { call, put, takeLatest } from '@redux-saga/core/effects';
const READ_HOME = 'HOME/READ';
const READ_HOME_SUCCESS = 'HOME/READ_SUCCESS';
const READ_HOME_FAIL = 'HOME/READ_FAIL';
const UPDATE_HOME_CONTENT = 'HOME/UPDATE_CONTENT';
const UPDATE_HOME_CONTENT_SUCCESS = 'HOME/UPDATE_CONTENT_SUCCESS';
const UPDATE_HOME_CONTENT_FAIL = 'HOME/UPDATE_CONTENT_FAIL';
const UPDATE_HOME_PHOTO = 'HOME/UPDATE_PHOTO';
const UPDATE_HOME_PHOTO_SUCCESS = 'HOME/UPDATE_PHOTO_SUCCESS';
const UPDATE_HOME_PHOTO_FAIL = 'HOME/UPDATE_PHOTO_FAIL';
export const select = (id) => ({ type: READ_HOME, id });
export const updateContent = (params) => ({ type: UPDATE_HOME_CONTENT, params });
export const updatePhoto = (params) => ({ type: UPDATE_HOME_PHOTO, params });

const initialHome = {
    id: 0,
    home: {},
    homeId: {},
    loading: false,
    success: false,
    enableAccess: false,
};

const getHome = function* (action) {
    try {
        console.log('응답하라 오바');
        const result = yield call(getHomeApi, action.id);
        yield put({ type: READ_HOME_SUCCESS, data: result });
    } catch (err) {
        yield put({ type: READ_HOME_FAIL, data: err });
    }
};

const updateHomeContent = function* (action) {
    try {
        console.log('업데이트 콘텐트 응답');
        const result = yield call(updateHomeContentApi, action.params);
        yield put({ type: UPDATE_HOME_CONTENT_SUCCESS, data: result });
    } catch (err) {
        yield put({ type: UPDATE_HOME_CONTENT_FAIL, data: err });
    }
};

const updateHomePhoto = function* (action) {
    try {
        console.log('업데이트 포토 응답');
        const result = yield call(updateHomePhotoApi, action.params);
        yield put({ type: UPDATE_HOME_PHOTO_SUCCESS, data: result });
    } catch (err) {
        yield put({ type: UPDATE_HOME_PHOTO_FAIL, data: err });
    }
};
export function* HomeSaga() {
    yield takeLatest(READ_HOME, getHome);
    yield takeLatest(UPDATE_HOME_CONTENT, updateHomeContent);
    yield takeLatest(UPDATE_HOME_PHOTO, updateHomePhoto);
}

const homes = (state = initialHome, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case UPDATE_HOME_CONTENT:
                draft.loading = true;
                draft.success = false;
                break;
            case UPDATE_HOME_CONTENT_SUCCESS:
                draft.loading = false;
                draft.success = true;
                break;
            case UPDATE_HOME_CONTENT_FAIL:
                draft.loading = false;
                draft.success = false;
                break;
            case UPDATE_HOME_PHOTO:
                draft.loading = true;
                draft.success = false;
                break;
            case UPDATE_HOME_PHOTO_SUCCESS:
                draft.loading = false;
                draft.success = true;
                break;
            case UPDATE_HOME_PHOTO_FAIL:
                draft.loading = false;
                draft.success = false;
                break;
            case READ_HOME:
                draft.loading = true;
                break;
            case READ_HOME_SUCCESS:
                console.log(action);
                draft.home = action.data;
                draft.homeId = action.data.id;
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
