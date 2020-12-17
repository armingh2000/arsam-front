import { Profiler } from "react";
import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
    user: {
        email: '',
        firstName: '',
        lastName: '',
        description: '',
        image: null,
        fields: [],
        inEvents: [],
        adminInEvents: [],
    },
    status: ''
}


const profile = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.GET_USER_REQUEST:
            return{
                ...state,
                status: 'Loading'
            };
        case ActionTypes.GET_USER_SUCCESS:
            return{
                user: payload,
                status: 'Success'
            };
        case ActionTypes.GET_USER_FAILURE:
            return{
                ...state,
                status: 'Error'
            };
        case ActionTypes.UPDATE_PROFILE:
            return{
                ...state,
                status: 'Loading'
            };
        case ActionTypes.UPDATE_PROFILE_SUCCESS:
            return{
                user: {
                    ...state.user,
                    payload
                },
                status: 'Success'
            }
        case ActionTypes.UPDATE_PROFILE_FAILURE:
            return{
                ...state,
                status: 'Error'
            };
        case ActionTypes.UPDATE_IMAGE:
            return{
                ...state,
                status: 'Loading'
            };
        case ActionTypes.UPDATE_IMAGE_SUCCESS:
            return{
                user: {
                    ...state.user,
                    payload
                },
                status: 'Success'
            }
        case ActionTypes.UPDATE_IMAGE_FAILURE:
            return{
                ...state,
                status: 'Error'
            };
        default:
            return state;
    }
}




export default profile;
