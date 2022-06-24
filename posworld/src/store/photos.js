import { getPhoto, deletePhotoApi, postPhotoApi } from './photosApi';
import produce from 'immer';
import { takeLatest, call, put } from 'redux-saga/effects';

export const SELECT_PHOTO = 'PHOTO/SELECT';
export const SELECT_PHOTO_SUCCESS = 'PHOTO/SELECT_SUCCESS';
export const SELECT_PHOTO_FAIL = 'PHOTO/SELECT_FAIL';

export const SELECT_PHOTO_BY_ID = 'DETAIL/SELECT';
export const SELECT_PHOTO_BY_ID_SUCCESS = 'DETAIL/SELECT_SUCCESS';
export const SELECT_PHOTO_BY_ID_FAIL = 'DETAIL/SELECT _FAIL';

export const INSERT_PHOTO = 'INSERT_PHOTO';
export const INSERT_PHOTO_SUCCESS = 'INSERT_PHOTO_SUCCESS';
export const INSERT_PHOTO_FAIL = 'INSERT_PHOTO_FAIL';
export const DELETE_PHOTO = 'DELETE_PHOTO';
export const DELETE_PHOTO_SUCCESS = 'DELETE_PHOTO_SUCCESS';
export const DELETE_PHOTO_FAIL = 'DELETE_PHOTO_FAIL';

const id = '1';
export const selectPhoto = () => ({ type: SELECT_PHOTO, id });
export const insertPhoto = (params) => ({ type: INSERT_PHOTO, params });
export const delPhoto = (id) => ({ type: DELETE_PHOTO, id });

const initialPhoto = {
    pid: 0,
    photo: {},
    loading: false,
    success: false,
    enableAccess: false,
};

//사가함수
export function* photoSaga() {
    yield takeLatest(SELECT_PHOTO, getPhoto);
    yield takeLatest(INSERT_PHOTO, postPhoto);
    yield takeLatest(DELETE_PHOTO, deletePhoto);
}

const postPhoto = function* (action) {
    try {
        const result = yield call(postPhotoApi, action.params);
        yield put({ type: INSERT_PHOTO_SUCCESS, data: result });
    } catch (error) {
        yield put({ type: INSERT_PHOTO_FAIL, data: error });
    }
};

const deletePhoto = function* (id) {
    try {
        const result = yield call(deletePhotoApi, id);
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
                console.log('성공');
                draft.success = true;
                draft.loading = false;
                draft.photo = action.data;
                break;
            case SELECT_PHOTO_FAIL:
                console.log('fail');
                draft.success = false;
                draft.loading = false;
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
