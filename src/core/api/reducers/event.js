import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
  showEvent: {}
};

export default ( state = initialState, {type, payload }) => {
  switch (type) {
    case ActionTypes.GET_EVENT_REQUEST:
      console.log("state request", state);
      return state;

    case ActionTypes.GET_EVENT_REQUEST_SUCCESS:
      console.log(payload);
      return {
        showEvent: {
          payload
        }
      }

    case ActionTypes.GET_EVENT_REQUEST_FAILURE:
      return state;

    default:
      return state;
    };
}
