import produce from 'immer';
import { postPhotoApi } from './photosApi';
import { takeLatest, call, put } from 'redux-saga/effects';
import { fileAxios } from '../http/CustomAxios';

const INSERT_PHOTO = 'INSERT_PHOTO';
const INSERT_PHOTO_SUCCESS = 'INSERT_PHOTO_SUCCESS';
const INSERT_PHOTO_FAIL = 'INSERT_PHOTO_FAIL';

const initialPhoto = {
    photos: {},
    loading: false,
    success: false,
    enableAccess: false,
};

export const insertPhoto = (params) => ({ type: INSERT_PHOTO, params });

export function* PhotoSaga() {
    yield takeLatest(INSERT_PHOTO, postPhoto);
}

const postPhoto = function* (action) {
    try {
        const result = yield call(postPhotoApi, action.params);
        yield put({ type: INSERT_PHOTO_SUCCESS, data: result });
    } catch (error) {
        yield put({ type: INSERT_PHOTO_FAIL, data: error });
    }
};

const photos = (state = initialPhoto, action) =>
    produce(state, (draft) => {
        switch (action.type) {
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
            default:
                return state;
        }
    });

export default photos;
