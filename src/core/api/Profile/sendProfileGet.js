import { sendGetRequest } from "../api";

const sendProfileGet = ({email, tokenId}) => {
    return sendGetRequest({
        url: `api/account/getprofile?email=${email}`,
        headers: {
          'Authorization': `Bearer ${tokenId}`
      }})
  }

  export default sendProfileGet;
