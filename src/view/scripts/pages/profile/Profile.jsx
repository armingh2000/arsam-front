import React from "react";
import GLogout from "../login/components/GLogout";


const Profile = () =>
{
  console.log("userToken :" + localStorage.getItem("userToken"));
  return (<div>
    <p>Profile</p>
    <p>{localStorage.getItem("userToken") && <GLogout />}</p>
    </div>
  );
};

export default Profile;
