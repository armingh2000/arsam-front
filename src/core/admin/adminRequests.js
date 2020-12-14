import {sendPatchRequest, sendDeleteRequest} from '../api/api';

export const sendMemberPatch = ({email, eventId}) => {
  return sendPatchRequest({
    url: `event/PromoteMember?id=${eventId}&memberEmail=${email}`,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("userToken")}`
    }
  })
}

export const sendAdminPatch = ({email, eventId}) => {
  return sendPatchRequest({
    url: `event/PromoteAdmin?id=${eventId}&memberEmail=${email}`,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("userToken")}`
    }
  })
}

export const sendKickDelete = ({email, eventId}) => {
  console.log("asdasdasdas", email);
  return sendDeleteRequest({
    url: `event/KickUser?id=${eventId}&userEmail=${email}`,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem("userToken")}`
  }
  })
}
