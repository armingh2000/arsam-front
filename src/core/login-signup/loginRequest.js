import {sendPostRequest} from "../api/api";

const sendLoginPost = (data) => {
  return sendPostRequest({
    url: "api/account/login",
    data: data
  });
};

export {sendLoginPost};
