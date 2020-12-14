import { sendGetRequest } from "../api";

const sendEventGet = ({eventId, tokenId}) => {
  return sendGetRequest({
      url: `event/get?id=${eventId}`,
      headers: {
        'Authorization': `Bearer ${tokenId}`
    }})
}

export default sendEventGet;
