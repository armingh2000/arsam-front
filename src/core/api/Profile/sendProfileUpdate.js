import { sendPostRequest } from "../api";

const sendProfileUpdate = (data) => {
    return sendPostRequest({
        url: `api/account/updateprofile`,
        data,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('userToken')}`
      }})
  }

const sendImageUpdate = (data) => {
    return sendPostRequest({
        url: `api/account/updateimage`,
        data: data,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
    })
}

const sendChangePassword = (data) => {
    return sendPostRequest({
        url: `/api/account/ChangePassword`,
        data,
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
    })
}

export  {sendProfileUpdate, sendImageUpdate, sendChangePassword};
