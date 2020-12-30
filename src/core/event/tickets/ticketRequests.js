import {sendPostRequest} from "../../api/api";

export const sendCreateTicketPost = ({typeId, email}) => {
  return sendPostRequest({
    url: `api/ticket/createTicket`,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("userToken")}`
    },
    data: {
      TypeId: typeId,
      UserEmail: email
    }
  })
}
