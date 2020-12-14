import {sendPostRequest} from "../api/api";

const sendLoginPost = (data) => {
  return sendPostRequest({
    url: "account/login",
    data: data
  });
};

export {sendLoginPost};
