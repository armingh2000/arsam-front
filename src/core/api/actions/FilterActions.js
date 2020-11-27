
export const setFiltering = (state) => ({
    type: 'SET_FILTERING',
    payload : state
})

export const getEventsList = (events) => ({
    type: 'GET_EVENTS_LIST',
    payload: events
})

export const sendFilterRequest = (filters) => {
    console.log(filters)
    return{
        type : 'Send_Filter_Request',
        payload: filters
    }
    
}