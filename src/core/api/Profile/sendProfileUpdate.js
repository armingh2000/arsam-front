import { sendPostRequest } from "../api";

const sendProfileUpdate = (data) => {
    return sendPostRequest({
        url: `https://localhost:44373/api/account/updateprofile`,
        data,
        headers: {
          'Authorization': `Bearer ${data.tokenId}`
      }})
  }

const sendImageUpdate = (data) => {
    return sendPostRequest({
        url: `https://localhost:44373/api/account/updateimage`,
        data,
        headers: {
            'Authorization': `Bearer ${data.tokenId}`
        }
    })
}

const sendChangePassword = (data) => {
    return sendPostRequest({
        url: `https://localhost:44373/api/account/ChangePassword`,
        data,
        headers:{
            'Authorization': `Bearer ${data.tokenId}`
        }
    })
}
  
export  {sendProfileUpdate, sendImageUpdate, sendChangePassword};