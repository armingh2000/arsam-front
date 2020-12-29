import { sendPostRequest } from "../api";


export const sendFilterPost = (data) => {
    console.log("data:(sendFilter.js)");
    console.log(data);
    return(
        sendPostRequest({
            url: `api/event/filter?PageNumber=${data.PageNumber}&PageSize=${data.PageSize}`,
            data : data,
            // headers: {
            //     'Authorization': `Bearer ${localStorage.getItem('userToken')}`
            // }
        })
    )
}
