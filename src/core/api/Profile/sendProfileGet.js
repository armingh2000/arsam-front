import { sendGetRequest } from "../api";

const sendProfileGet = ({id, tokenId}) => {
    return sendGetRequest({
        url: `api/account/getprofile?id=${id}`,
        headers: {
          'Authorization': `Bearer ${tokenId}`
      }})
  }

  export default sendProfileGet;
