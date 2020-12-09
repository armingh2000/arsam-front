import { sendPostRequest, sendpostRequest } from "../api";


export const sendFilterPost = (data) => {
    console.log("data:");
    console.log(data);
    return(
        sendPostRequest({
            url: `https://localhost:44373/api/event/filter?PageNumber=${data.filters.PageNumber}&PageSize=${data.filters.PageSize}`,
            data : data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('userToken')}`
            }

        })
    )
}
