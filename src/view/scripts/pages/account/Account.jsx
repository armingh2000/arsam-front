import React from "react";
import GLogout from "../login/components/GLogout";

const Account = () =>
{
  return(<div>
    <p>{localStorage.getItem("userToken")}</p>;
  </div>);
};

export default Account;
