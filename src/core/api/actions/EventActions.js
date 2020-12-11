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
    type: ActionTypes.SET_ADMIN_REQUEST,
    payload
  }
}

export const setMember = ({payload}) =>
{
  return {
    type: ActionTypes.SET_MEMBER_REQUEST,
    payload
  }
}

export const kickMember = ({payload}) =>
{
  return {
    type: ActionTypes.KICK_MEMBER_REQUEST,
    payload
  }
}

export const setRequest = ({payload}) =>
{
  return {
    type: ActionTypes.SET_REQUEST_REQUEST,
    payload
  }
}

export const acceptJoin = ({payload}) =>
{
  return {
    type: ActionTypes.ACCEPT_JOIN_REQUEST,
    payload
  }
}
