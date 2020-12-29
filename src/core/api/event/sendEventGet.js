import { sendGetRequest } from "../api";

const sendEventGet = ({eventId, tokenId}) => {
  return sendGetRequest({
      url: `api/event/get?id=${eventId}`,
    //   headers: {
    //     'Authorization': `Bearer ${tokenId}`
    // }
  })
}

export default sendEventGet;
