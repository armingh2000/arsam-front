import axios from "axios";

const sendRequest = (props) => {
  return axios(props);
};

const sendPostRequest = (props) => {
  return sendRequest({
    ...props,
    method: "post"
  });
};

const sendGetRequest = (props) => {
  return sendRequest({
    ...props,
    method: "get"
  });
};

const sendPutRequest = (props) => {
  return sendRequest({
    ...props,
    method: "put"
  });
};

const sendDeleteRequest = (props) => {
  return sendRequest({
    ...props,
    method: "delete"
  });
};

export {
  sendDeleteRequest,
  sendGetRequest,
  sendPutRequest,
  sendPostRequest
};
