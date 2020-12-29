import { sendPatchRequest } from "../api";

const sendChangeToPremium = (data) => {
    return sendPatchRequest({
        url: `api/account/UpgradeToPremium?package=${data}`,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('userToken')}`
      }})
  }

  export default sendChangeToPremium;
