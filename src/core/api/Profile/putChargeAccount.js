import { sendPutRequest } from "../api";

const putChargeAccount = (amount) => {
    return sendPutRequest({
        url: `api/account/chargeaccount?amount=${amount}`,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('userToken')}`
      }})
  }

  export default putChargeAccount;
