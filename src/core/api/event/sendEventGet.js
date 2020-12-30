import { sendGetRequest } from "../api";

const sendEventGet = ({eventId, }) => {
  const tokenId = localStorage.getItem("userToken");
  if(tokenId===null){
    return sendGetRequest({
      url: `api/event/get?id=${eventId}`,
    })
  }
  else{
    return sendGetRequest({
        url: `api/event/get?id=${eventId}`,
        headers: {
          'Authorization': `Bearer ${tokenId}`
      }
    })
  }

}

export default sendEventGet;
