import { ActionTypes } from "../constants/ActionTypes"

export const setFiltering = (state) => ({
    type: ActionTypes.SET_FILTERING,
    payload : state
})

export const getEventsList = (events) => ({
    type: ActionTypes.GET_EVENTS_LIST,
    payload: events
})

export const sendFilterRequest = (filters) => {
    return{
        type : ActionTypes.SEND_FILTER_REQUEST,
        payload: filters
    }
}

export const resetFilteredEvents = () => {
  return {
    type: ActionTypes.RESET_FILTERED_EVENTS,
  }
}
