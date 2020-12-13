import {sendPatchRequest, sendDeleteRequest, sendGetRequest, sendPutRequest, sendPostRequest} from '../api/api';

export const sendMemberPatch = ({email, eventId}) => {
  return sendPatchRequest({
    url: `https://localhost:44373/api/event/PromoteMember?id=${eventId}&memberEmail=${email}`,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("userToken")}`
    }
  })
}

export const sendAdminPatch = ({email, eventId}) => {
  return sendPatchRequest({
    url: `https://localhost:44373/api/event/PromoteAdmin?id=${eventId}&memberEmail=${email}`,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("userToken")}`
    }
  })
}

export const sendKickDelete = ({email, eventId}) => {
  return sendDeleteRequest({
    url: `https://localhost:44373/api/event/KickUser?id=${eventId}&userEmail=${email}`,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem("userToken")}`
  }
  })
}

export const sendRequestGet = ({eventId}) => {
  return sendGetRequest({
    url: `https://localhost:44373/api/event/GetJoinRequests?eventId=${eventId}`,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("userToken")}`
    }
  })
}

export const sendAcceptPatch = ({email, eventId}) => {
  return sendPatchRequest({
    url: `https://localhost:44373/api/event/AcceptOrRejectJoinRequest?EventId=${eventId}&memberEmail=${email}&accept=true`,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("userToken")}`
    }
  })
}

export const sendRejectPatch = ({email, eventId}) => {
  return sendPatchRequest({
    url: `https://localhost:44373/api/event/AcceptOrRejectJoinRequest?EventId=${eventId}&memberEmail=${email}&accept=false`,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("userToken")}`
    }
  })
}

export const sendEventTicketTypeGet = ({eventId}) => {
  return sendGetRequest({
    url: `https://localhost:44373/api/ticket/GetEventTicketTypes?id=${eventId}`,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("userToken")}`
    }
  })
}

export const sendEditTicketPut = ({ticket}) => {
  return sendPutRequest({
    url: `https://localhost:44373/api/ticket/UpdateType`,
    data: {
      Id: ticket.id,
      Name: ticket.name,
      Description: ticket.description,
      Price: ticket.price,
      Capacity: ticket.capacity
    },
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("userToken")}`
    }
  })
}

export const sendAddTypePost = ({ticket, eventId}) => {
  console.log("req", ticket);
  return sendPostRequest({
    url: `https://localhost:44373/api/ticket/createtype`,
    data: {
      Name: ticket.name,
      Description: ticket.description,
      Price: ticket.price,
      Capacity: ticket.capacity,
      EventId: eventId
    },
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("userToken")}`
    }
  })
}
