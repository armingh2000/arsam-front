import React from "react";
import GLogout from "../login/components/GLogout";


const Profile = () =>
{
  console.log(localStorage.getItem("userToken"), localStorage.getItem("g"));
  return (<div>
    <p>Profile</p>
    <p>{localStorage.getItem("userToken") !== undefined && localStorage.getItem("g") !== undefined && <GLogout />}</p>
    </div>
  );
};

export default Profile;
