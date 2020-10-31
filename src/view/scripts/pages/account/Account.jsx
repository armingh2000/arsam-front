import React from "react";


const Account = () =>
{
  return <p>{localStorage.getItem("userToken")}</p>;
};

export default Account;
