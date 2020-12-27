import { ActionTypes } from "../constants/ActionTypes"

//get the user's data from back
export const getUser = (payload) => ({
    type: ActionTypes.GET_USER_REQUEST,
    payload
})

export const updateProfile = (payload) => ({
    type: ActionTypes.UPDATE_PROFILE,
    payload
})

export const updateImage = (payload) => ({
    type: ActionTypes.UPDATE_IMAGE,
    payload
})

export const updatePassword =(credentials, handleSuccess, handleFail) => ({
    type: ActionTypes.UPDATE_PASSWORD,
    payload: {
        credentials,
        handleSuccess,
        handleFail
    }
})

export const deleteProfile = () => ({
    type: ActionTypes.DELETE_PROFILE
})

export const chargeAccount = (credentials, handleSuccess, handleOk) => ({
    type: ActionTypes.CHARGE_ACCOUNT,
    payload: {
        credentials,
        handleSuccess,
        handleOk
    }
})

export const changeToPremium = (credentials, handleSuccess, handleFail, handleOk) => ({
    type: ActionTypes.CHANGE_TO_PREMIUM,
    payload:{
        credentials,
        handleSuccess,
        handleFail,
        handleOk
    }
})

