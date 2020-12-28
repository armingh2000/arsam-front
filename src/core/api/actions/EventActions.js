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

export const rejectJoin = ({payload}) =>
{
  return {
    type: ActionTypes.REJECT_JOIN_REQUEST,
    payload
  }
}

export const getEventTicketType = ({payload}) => {
  return {
    type: ActionTypes.GET_EVENT_TICKET_TYPE_REQUEST,
    payload
  }
}

export const updateTicketType = ({payload}) => {
  return {
    type: ActionTypes.UPDATE_TICKET_TYPE_REQUEST,
    payload
  }
}

export const addTicketType = ({payload}) => {
  return {
    type: ActionTypes.ADD_TICKET_TYPE_REQUEST,
    payload
  }
}

export const deleteTicketType = ({payload}) => {
  return {
    type: ActionTypes.DELETE_TICKET_TYPE_REQUEST,
    payload
  }
}

export const toggleTicket = ({payload}) => {
  return {
    type: ActionTypes.TOGGLE_TICKET_REQUEST,
    payload
  }
}

export const getTickets = ({payload}) => {
  return {
    type: ActionTypes.GET_EVENT_TICKETS_REQUEST,
    payload
  }
}

export const joinRequest = ({payload}) => {
  return {
    type: ActionTypes.SEND_JOIN_REQUEST,
    payload
  }
}
