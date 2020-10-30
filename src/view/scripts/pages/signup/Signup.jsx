import React from "react";

const Signup = () => {

  return <div>
    <p>signup</p>
    <p>{localStorage.getItem("userToken")}</p>
  </div>
}

export default Signup;
