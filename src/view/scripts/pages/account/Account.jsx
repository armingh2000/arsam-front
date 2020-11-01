import React from "react";
import GLogout from "../login/components/GLogout";


const Account = () =>
{
  console.log("userToken :" + localStorage.getItem("userToken"));
  return (<div>
    <p>account</p>
    <p>{localStorage.getItem("userToken") && <GLogout />}</p>
    </div>
  );
};

export default Account;
