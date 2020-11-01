import React from "react";


const Account = () =>
{
  console.log("userToken :" + localStorage.getItem("userToken"));
  return <p>{localStorage.getItem("userToken")}</p>;
};

export default Account;
