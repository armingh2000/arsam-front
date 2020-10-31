import {sendPostRequest} from "./api";

const sendGLoginPost = (data) => {
  return sendPostRequest({
    url: "https://localhost:44373/api/account/GoogleLogin",
    data: data
  });
};

export {sendGLoginPost};
