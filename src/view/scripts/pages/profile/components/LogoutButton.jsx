import React from "react";
import GLogout from "../../login/components/GLogout";
import {Button} from "antd";
import {useHistory} from 'react-router-dom';



const LogoutButton = () =>
{
  const history = useHistory();


  function logout () {
    localStorage.clear();
    history.replace("/");
    alert("Successfully logged out")
  }

  if(localStorage.getItem("userToken") && localStorage.getItem('g')) {
     return <GLogout />;
  }
  return <Button className="btn center-button" onClick={logout}>
    Logout
</Button>
}

export default LogoutButton;
