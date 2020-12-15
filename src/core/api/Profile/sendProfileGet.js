import { sendGetRequest } from "../api";

const sendProfileGet = ({email, tokenId}) => {
    return sendGetRequest({
        url: `https://localhost:44373/api/account/getprofile?email=${email}`,
        headers: {
          'Authorization': `Bearer ${tokenId}`
      }})
  }
  
  export default sendProfileGet;
  