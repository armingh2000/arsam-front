import {  sendPostRequest } from "../api";

const sendRating = (data) => {
    return sendPostRequest({
        url: `api/rating/rateevent`,
        data,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('userToken')}`
      }})
  }

export default sendRating