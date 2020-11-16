import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
  event: {
    name: '',
     id: null,
     isProject: null,
     description: '',
     location: '',
     isPrivate: null,
     startDate: '',
     endDate: '',
     isLimitedMember: null,
     maximumNumberOfMembers: null,
     eventMembers: [],
     images: [],
     creator: {
       email: '',
       phoneNumber: null
     },
     categories: [],
     status: 'idle'
  }
};

const event = ( state = initialState, {type, payload }) => {
  switch (type) {
    case ActionTypes.GET_EVENT_REQUEST:
      return {
        ...state,
        status: 'loading'
      };

    case ActionTypes.GET_EVENT_REQUEST_SUCCESS:
      return {
        ...state,
        event: payload.data,
        status: 'success'
      }

    case ActionTypes.GET_EVENT_REQUEST_FAILURE:
      return {
        ...state,
        status: 'error'
      };

    default:
      return state;
    };
}

export default event;
