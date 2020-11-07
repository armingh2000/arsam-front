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



const sendImageEventPost = (data) =>{
  return sendPostRequest({
    url:"https://localhost:44373/api/event/AddImage",
    data: data
  });
};

export {sendCreateEventPost, sendImageEventPost};
