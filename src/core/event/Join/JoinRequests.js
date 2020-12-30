import {sendPostRequest} from "../../api/api";

export const sendJoinRequestPost = ({eventId}) => {
  return sendPostRequest({
    url: `api/event/JoinRequest?eventId=${eventId}`,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("userToken")}`
    },
  })
}
