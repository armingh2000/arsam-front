import {sendPostRequest} from "../api";

const sendLoginPost = (data) => {
  return sendPostRequest({
    url: "https://localhost:44373/api/account/login",
    data: data
  });
};

export {sendLoginPost};
