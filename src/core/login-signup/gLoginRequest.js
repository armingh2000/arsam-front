import {sendPostRequest} from "../api/api";


const sendGLoginPost = (data) => {
  return sendPostRequest({
    url: "account/googlelogin",
    params: {
      tokenid: data
    }
  });
};

export {
  sendGLoginPost
};
