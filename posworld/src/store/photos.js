import { getPhotoByIdApi, deletePhotoApi, postPhotoApi, getPhotoApi } from './photosApi';
import produce from 'immer';
import { takeLatest, call, put } from 'redux-saga/effects';

export const SELECT_PHOTO = 'PHOTO/SELECT';
export const SELECT_PHOTO_SUCCESS = 'PHOTO/SELECT_SUCCESS';
export const SELECT_PHOTO_FAIL = 'PHOTO/SELECT_FAIL';

export const SELECT_PHOTO_BY_ID = 'DETAIL/SELECT';
export const SELECT_PHOTO_BY_ID_SUCCESS = 'DETAIL/SELECT_SUCCESS';
export const SELECT_PHOTO_BY_ID_FAIL = 'DETAIL/SELECT _FAIL';

export const SET_PID = 'PID/SET';
export const SET_PID_SUCCESS = 'PID/SET_SUCCESS';
export const SET_PID_FAIL = 'PID/SET_FAIL';

export const INSERT_PHOTO = 'INSERT_PHOTO';
export const INSERT_PHOTO_SUCCESS = 'INSERT_PHOTO_SUCCESS';
export const INSERT_PHOTO_FAIL = 'INSERT_PHOTO_FAIL';
export const DELETE_PHOTO = 'DELETE_PHOTO';
export const DELETE_PHOTO_SUCCESS = 'DELETE_PHOTO_SUCCESS';
export const DELETE_PHOTO_FAIL = 'DELETE_PHOTO_FAIL';

const id = '2';
export const selectPhoto = () => ({ type: SELECT_PHOTO, id });
export const selectPhotoById = (pid) => ({ type: SELECT_PHOTO_BY_ID, pid });
export const setPid = (id) => ({ type: SET_PID, id });
export const insertPhoto = (params, userid) => ({ type: INSERT_PHOTO, params, userid });
export const delPhoto = (pid) => ({ type: DELETE_PHOTO, pid });

const initialPhoto = {
    pid: 1,
    photo: {},
    photoDetail: [],
    loading: false,
    success: false,
    enableAccess: false,
};

//사가함수
export function* photoSaga() {
    yield takeLatest(SELECT_PHOTO, getPhoto);
    yield takeLatest(SELECT_PHOTO_BY_ID, getPhotoById);
    yield takeLatest(SET_PID, createPid);
    yield takeLatest(INSERT_PHOTO, postPhoto);
    yield takeLatest(DELETE_PHOTO, deletePhoto);
}

const getPhotoById = function* (pid) {
    try {
        const result = yield call(getPhotoByIdApi, pid);
        yield put({ type: SELECT_PHOTO_BY_ID_SUCCESS, data: result });
    } catch (err) {
        yield put({ type: SELECT_PHOTO_BY_ID_FAIL, data: err });
    }
};

const createPid = function* (action) {
    try {
        yield put({ type: SET_PID_SUCCESS, data: action.id });
    } catch (err) {
        yield put({ type: SET_PID_FAIL, data: err });
    }
};

export const getPhoto = function* (action) {
    try {
        const result = yield call(getPhotoApi, action.id);
        yield put({ type: SELECT_PHOTO_SUCCESS, data: result });
    } catch (err) {
        yield put({ type: SELECT_PHOTO_FAIL, data: err });
    }
};

const postPhoto = function* (action) {
    try {
        console.log('postPhoto ', action);
        const result = yield call(postPhotoApi, action);
        yield put({ type: INSERT_PHOTO_SUCCESS, data: result });
    } catch (error) {
        yield put({ type: INSERT_PHOTO_FAIL, data: error });
    }
};

const deletePhoto = function* (pid) {
    try {
        const result = yield call(deletePhotoApi, pid);
        yield put({ type: DELETE_PHOTO_SUCCESS, data: result });
    } catch (error) {
        yield put({ type: DELETE_PHOTO_FAIL, data: error });
    }
};

const photos = (state = initialPhoto, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case SELECT_PHOTO:
                draft.success = false;
                draft.loading = true;
                break;
            case SELECT_PHOTO_SUCCESS:
                draft.success = true;
                draft.loading = false;
                draft.photo = action.data;
                break;
            case SELECT_PHOTO_FAIL:
                draft.success = false;
                draft.loading = false;
                break;
            case SELECT_PHOTO_BY_ID:
                draft.success = false;
                draft.loading = true;
                break;
            case SELECT_PHOTO_BY_ID_SUCCESS:
                draft.success = true;
                draft.loading = false;
                draft.photoDetail = action.data;
                break;
            case SELECT_PHOTO_BY_ID_FAIL:
                draft.success = false;
                draft.loading = false;
                break;
            case SET_PID:
                draft.loading = true;
                break;
            case SET_PID_SUCCESS:
                draft.loading = false;
                draft.pid = action.data;
                break;
            case INSERT_PHOTO:
                draft.loading = true;
                draft.success = false;
                break;
            case INSERT_PHOTO_SUCCESS:
                draft.loading = false;
                draft.success = true;
                break;
            case INSERT_PHOTO_FAIL:
                draft.loading = false;
                draft.success = false;
                break;
            case DELETE_PHOTO:
                draft.loading = true;
                draft.success = false;
                break;
            case DELETE_PHOTO_SUCCESS:
                draft.loading = false;
                draft.success = true;
                break;
            case DELETE_PHOTO_FAIL:
                draft.loading = false;
                draft.success = false;
                break;
            default:
                return state;
        }
    });
export default photos;
