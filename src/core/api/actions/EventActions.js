import { ActionTypes } from "../constants/ActionTypes"

export const getEventRequest = ({payload:{eventId, tokenId}}) =>
{
    return {
        type: ActionTypes.GET_EVENT_REQUEST,
        payload:
        {
            eventId,
            tokenId
        }
    }
}
