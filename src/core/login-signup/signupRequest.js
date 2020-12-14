import {sendPostRequest} from "../api/api";

const sendSignupPost = (data) => {
  return sendPostRequest({
    url: "account/register",
    data: data
  });
};

export {sendSignupPost};
