import {sendPostRequest} from "../api";

// const sendCreateEventPost = (data) => {
//   return sendPostRequest({
//     url: "https://localhost:44373/api/event/create",
//     data: data
//   });
// };

const sendCreateEventPost = (data,headers) => {
  return sendPostRequest({
    url: "https://localhost:44373/api/event/create",
    data: data,
    headers: headers
  });
};



const sendImageEventPost = (url,data,headers) =>{
  return sendPostRequest({
    url:url,
    data: data,
    headers: headers
  });
};

export {sendCreateEventPost, sendImageEventPost};
