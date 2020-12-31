import { all, put, takeLatest } from "redux-saga/effects";
import { updateProfile } from "../actions/UserProfileActions";
import { ActionTypes } from "../constants/ActionTypes";
import sendProfileGet from "../Profile/sendProfileGet";
import {message} from 'antd';
import {sendProfileUpdate, sendImageUpdate, sendChangePassword, deleteProfileImage} from "../Profile/sendProfileUpdate";
import putChargeAccount from "../Profile/putChargeAccount";
import sendChangeToPremium from "../Profile/sendChangeToPremium"
import { convertLegacyProps } from "antd/lib/button/button";


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

export function* deleteProfile({}){
    try{
        setTimeout(() => {}, 1000);
        const data = yield deleteProfileImage()
        yield put ({
            type: ActionTypes.DELETE_PROFILE_SUCCESS,
            payload: data.data
        });
    }
    catch{
        yield put ({
            type: ActionTypes.DELETE_PROFILE_FIALURE,
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
            payload: e.response.status
        })
        payload.handleFail(e.response.data[Object.keys(e.response.data)][0]);
    }
}

export function* chargeAccountRequest({payload}){
    try{
        setTimeout(() => {}, 1000);
        const data = yield putChargeAccount(payload.credentials)
        yield put ({
            type: ActionTypes.CHARGE_ACCOUNT_SUCCESS,
            payload: data.data
        });
        payload.handleSuccess();
    }
    catch(e){
        yield put ({
            type: ActionTypes.CHARGE_ACCOUNT_FAILURE,
        })
    }
}


export function* changeToPremium({payload}){
    try{
        setTimeout(() => {}, 1000);
        const data = yield sendChangeToPremium(payload.credentials)
        yield put ({
            type: ActionTypes.CHANGE_TO_PREMIUM_SUCCESS,
            payload: data.data
        });
        payload.handleSuccess();
        // payload.handleOk();
    }
    catch(e){
        console.log(e.response.status)
        yield put ({
            type: ActionTypes.CHANGE_TO_PREMIUM_FAILURE,
            payload: e.response.status
        })
        payload.handleFail();
        payload.handleOk();
    }
}



export default function* root() {
    yield all([
        takeLatest(ActionTypes.GET_USER_REQUEST, getUserRequest),
        takeLatest(ActionTypes.UPDATE_PASSWORD, updatePasswordRequest),
        takeLatest(ActionTypes.UPDATE_IMAGE, updateImageRequest),
        takeLatest(ActionTypes.UPDATE_PROFILE, updateProfileRequest),
        takeLatest(ActionTypes.CHARGE_ACCOUNT, chargeAccountRequest),
        takeLatest(ActionTypes.DELETE_PROFILE, deleteProfile),
        takeLatest(ActionTypes.CHANGE_TO_PREMIUM, changeToPremium)
    ])
}
