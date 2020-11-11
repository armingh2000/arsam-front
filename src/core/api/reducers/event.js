import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
  event: {
    name:"",
    description:"",
    startDate:"",
    endDate:""
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
      console.log("err", payload);
      return state;

    default:
      return state;
    };
}
