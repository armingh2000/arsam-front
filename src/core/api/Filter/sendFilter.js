import { sendPostRequest } from "../api";


export const sendFilterPost = (data) => {
    console.log("data:(sendFilter.js)");
    console.log(data);
    const tokenId=localStorage.getItem('userToken');
    if(tokenId===null){
      return (
        sendPostRequest({
            url: `api/event/filter?PageNumber=${data.PageNumber}&PageSize=${data.PageSize}`,
            data : data,
        })
      );
    }
    else {
      return(
          sendPostRequest({
              url: `api/event/filter?PageNumber=${data.PageNumber}&PageSize=${data.PageSize}`,
              data : data,
              headers: {
                  'Authorization': `Bearer ${localStorage.getItem('userToken')}`
              }
          })
      )
    }

}
