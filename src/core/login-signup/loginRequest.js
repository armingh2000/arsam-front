import {sendPostRequest} from "../api/api";

const sendLoginPost = (data) => {
  return sendPostRequest({
    url: "https://localhost:44373/api/account/login",
    data: data
  });
};

export {sendLoginPost};
