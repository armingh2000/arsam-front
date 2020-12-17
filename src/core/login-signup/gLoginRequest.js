import {sendPostRequest} from "../api/api";


const sendGLoginPost = (data) => {
  return sendPostRequest({
    url: "api/account/googlelogin",
    params: {
      tokenid: data
    }
  });
};

export {
  sendGLoginPost
};
