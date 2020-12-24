import { sendGetRequest } from "../api";

const sendEventGet = ({eventId}) => {
  return sendGetRequest({
      url: `api/event/get?id=${eventId}`,
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("userToken")}`
    }})
}

export default sendEventGet;
