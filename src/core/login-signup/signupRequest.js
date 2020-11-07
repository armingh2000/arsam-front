import {sendPostRequest} from "../api";

const sendSignupPost = (data) => {
  return sendPostRequest({
    url: "https://localhost:44373/api/account/register",
    data: data
  });
};

export {sendSignupPost};
