import { ActionTypes } from "../constants/ActionTypes"

export const setFiltering = (state) => ({
    type: ActionTypes.SET_FILTERING,
    payload : state
})

export const getEventsList = (events) => ({
    type: ActionTypes.GET_EVENTS_LIST,
    payload: events
})

export const sendFilterRequest = (filters,shouldAddPageNumber) => {
    return{
        type : ActionTypes.SEND_FILTER_REQUEST,
        payload: {filters,shouldAddPageNumber}
    }
}

export const resetFilteredEvents = () => {
  return {
    type: ActionTypes.RESET_FILTERED_EVENTS,
  }
}

export const addFilterPageNumber = () =>{
  return{
    type:ActionTypes.ADD_FILTER_PAGE_NUMBER,
  }
}
