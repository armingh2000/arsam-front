import {sendPatchRequest, sendDeleteRequest} from '../api/api';

export const sendMemberPatch = ({email, eventId}) => {
  return sendPatchRequest({
    url: `api/event/PromoteMember?id=${eventId}&memberEmail=${email}`,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("userToken")}`
    }
  })
}

export const sendAdminPatch = ({email, eventId}) => {
  return sendPatchRequest({
    url: `api/event/PromoteAdmin?id=${eventId}&memberEmail=${email}`,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("userToken")}`
    }
  })
}

export const sendKickDelete = ({email, eventId}) => {
  console.log("asdasdasdas", email);
  return sendDeleteRequest({
    url: `api/event/KickUser?id=${eventId}&userEmail=${email}`,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem("userToken")}`
  }
  })
}
