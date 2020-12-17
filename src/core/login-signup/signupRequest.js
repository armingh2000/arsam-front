import {sendPostRequest} from "../api/api";

const sendSignupPost = (data) => {
  return sendPostRequest({
    url: "api/account/register",
    data: data
  });
};

export {sendSignupPost};
