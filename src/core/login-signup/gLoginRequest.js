import {sendPostRequest} from "../api/api";

const sendGLoginPost = (data) => {
  return sendPostRequest({
    url: "https://localhost:44373/api/account/googlelogin",
    params: {
      tokenid: data
    }
  });
};

export {
  sendGLoginPost
};
