import { ActionTypes } from "../constants/ActionTypes"

export const getEvent = ({payload}) =>
{
    return {
        type: ActionTypes.GET_EVENT_REQUEST,
        payload
    }
}
