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
        balance: '',
        premium: null,
        averagedCreatedEventsRating: '',
        isMe: null
    },
    status: '',
    changePasswordSuccess: false
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
                ...state,
                user: payload,
                status: 'Success',
                changePasswordSuccess:false

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
                ...state,
                user: payload,
                status: 'Success',
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
                ...state,
                user: payload,
                status: 'Success'
            }
        case ActionTypes.UPDATE_IMAGE_FAILURE:
            return{
                ...state,
                status: 'Error'
            };
        case ActionTypes.UPDATE_PASSWORD:
            return{
                ...state,
                status: 'Loading'
            };
        case ActionTypes.UPDATE_PASSWORD_SUCCESS:
            return{
                ...state,
                status: 'Success',
                changePasswordSuccess:true
            }
        case ActionTypes.UPDATE_PASSWORD_FAILURE:
            return{
                ...state,
                status: payload !== 404 ? 'Success' : 'Error'
            };
        case ActionTypes.CHARGE_ACCOUNT:
            return{
                ...state,
                status: 'Loading'
            }
        case ActionTypes.CHARGE_ACCOUNT_SUCCESS:
            return{
                ...state,
                user: payload,
                status: 'Success'
            }
        case ActionTypes.CHARGE_ACCOUNT_FAILURE:
            return{
                ...state,
                status: 'Error'
            }
        case ActionTypes.CHANGE_TO_PREMIUM:
            return{
                ...state,
                status: 'Loading'
            }
        case ActionTypes.CHANGE_TO_PREMIUM_SUCCESS:
            return{
                ...state,
                user: payload,
                status: 'Success'
            }
        case ActionTypes.CHANGE_TO_PREMIUM_FAILURE:
            return{
                ...state,
                status: payload == 400 ? 'Success' : 'Error'
            }
        case ActionTypes.DELETE_PROFILE:
            return{
                ...state,
                status: 'Loading'
            }
        case ActionTypes.DELETE_PROFILE_SUCCESS:
            return{
                ...state,
                user: payload,
                status: 'Success'
            }
        case ActionTypes.DELETE_PROFILE_FIALURE:
            return{
                ...state,
                status: 'Error'
            }
        
        default:
            return state;
    }
}




export default profile;
