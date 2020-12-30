import {sendGetRequest, sendPostRequest} from '../api';

export const sendCommentGet = ({eventId, tokenId}) => {
  return sendGetRequest({
      url: `api/Comment/Get?eventId=${eventId}`,
      // headers: {
      //   'Authorization': `Bearer ${tokenId}`
      // }
  })
}

export const sendAddCommentPost = ({tokenId, data}) => {
  console.log("tokenId:",tokenId);
  return sendPostRequest({
    url: `api/Comment/Add`,
    headers:{
      'Authorization': `Bearer ${tokenId}`
    },
    data
  })
}
