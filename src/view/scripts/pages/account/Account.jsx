import React from "react";
import GLogout from "../login/components/GLogout";

const Account = () =>
{
  return(<div>
    <p>{localStorage.getItem("userToken")}</p>
    <GLogout />
  </div>);
};

export default Account;
