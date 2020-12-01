import {sendPatchRequest} from '../api/api';

const sendMemberPatch = ({email, eventId}) => {
  return sendPatchRequest({
    url: `https://localhost:44373/api/event/PromoteMember?id=${eventId}&memberEmail=${email}`,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("userToken")}`
    }
  })
}

const sendAdminPatch = ({email, eventId}) => {
  return sendPatchRequest({
    url: `https://localhost:44373/api/event/PromoteAdmin?id=${eventId}&memberEmail=${email}`,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("userToken")}`
    }
  })
}

export {
  sendMemberPatch,
  sendAdminPatch
};
