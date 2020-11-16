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
     imagesPath: [],
     creator: {
       email: '',
       phoneNumber: null
     },
     categories: []
  }
};

export default ( state = initialState, {type, payload }) => {
  switch (type) {
    case ActionTypes.GET_EVENT_REQUEST:
      return state;

    case ActionTypes.GET_EVENT_REQUEST_SUCCESS:
      return {
        ...state,
        event: payload.data
      }

    case ActionTypes.GET_EVENT_REQUEST_FAILURE:
      return state;

    default:
      return state;
    };
}
