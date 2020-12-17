import { all, put, takeLatest } from "redux-saga/effects";
import { updateProfile } from "../actions/UserProfileActions";
import { ActionTypes } from "../constants/ActionTypes";
import sendProfileGet from "../Profile/sendProfileGet";
import {message} from 'antd';
import {sendProfileUpdate, sendImageUpdate, sendChangePassword} from "../Profile/sendProfileUpdate";


export function* getUserRequest({payload}){
    try{
        setTimeout(() => {}, 1000);
        const data = yield sendProfileGet(payload)
        console.log(data.data)
        yield put ({
            type: ActionTypes.GET_USER_SUCCESS,
            payload: data.data
        });
    }
    catch{
        yield put ({
            type: ActionTypes.GET_USER_FAILURE,
        })
    }
}

export function* updateProfileRequest({payload}){
    try{
        setTimeout(() => {}, 1000);
        const data = yield sendProfileUpdate(payload)
        console.log(data.data)
        yield put ({
            type: ActionTypes.UPDATE_PROFILE_SUCCESS,
            payload: data.data
        });
    }
    catch{
        yield put ({
            type: ActionTypes.UPDATE_PROFILE_FAILURE,
        })
    }
}

export function* updateImageRequest({payload}){
    try{
        setTimeout(() => {}, 1000);
        const data = yield sendImageUpdate(payload)
        console.log(data.data)
        yield put ({
            type: ActionTypes.UPDATE_IMAGE_SUCCESS,
            payload: data.data
        });
    }
    catch{
        yield put ({
            type: ActionTypes.UPDATE_IMAGE_FAILURE,
        })
    }
}

export function* updatePasswordRequest({payload}){
    try{
        setTimeout(() => {}, 1000);
        const data = yield sendChangePassword(payload.credentials)
        yield put ({
            type: ActionTypes.UPDATE_PASSWORD_SUCCESS,
        });
        payload.handleSuccess();
    }
    catch(e){
        yield put ({
            type: ActionTypes.UPDATE_PASSWORD_FAILURE,
        })
        payload.handleFail(e.response.data[Object.keys(e.response.data)][0]);
    }
}



export default function* root() {
    yield all([
        takeLatest(ActionTypes.GET_USER_REQUEST, getUserRequest),
        takeLatest(ActionTypes.UPDATE_PASSWORD, updatePasswordRequest),
        takeLatest(ActionTypes.UPDATE_IMAGE, updateImageRequest),
        takeLatest(ActionTypes.UPDATE_PROFILE, updateProfileRequest)
    ])
}