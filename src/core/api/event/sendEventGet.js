import { sendGetRequest } from "../api";

const sendEventGet = ({eventId, tokenId}) => {
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
