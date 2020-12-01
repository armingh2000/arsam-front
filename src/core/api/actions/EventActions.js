import { ActionTypes } from "../constants/ActionTypes"

export const getEvent = ({payload}) =>
{
    return {
        type: ActionTypes.GET_EVENT_REQUEST,
        payload
    }
}

export const setAdminContent = ({payload}) =>
{
  return {
    type: ActionTypes.SET_ADMIN_CONTENT,
    payload
  }
}

export const setAdmin = ({payload}) =>
{
  return {
    type: ActionTypes.SET_ADMIN_Request,
    payload
  }
}

export const setMember = ({payload}) =>
{
  return {
    type: ActionTypes.SET_MEMBER_Request,
    payload
  }
}
