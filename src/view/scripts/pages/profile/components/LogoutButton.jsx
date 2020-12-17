import React from "react";
import GLogout from "../../login/components/GLogout";
import {Button, message} from "antd";
import {useHistory} from 'react-router-dom';
import {LogoutOutlined}  from '@ant-design/icons';



const LogoutButton = () =>
{
  const history = useHistory();


  function logout () {
    localStorage.clear();
    history.replace("/");
    message.success("Successfully logged out")
  }

  if(localStorage.getItem("userToken") && localStorage.getItem('g')) {
     return <GLogout />;
  }
  return <Button type="link" style={{color:'black'}} className="editButton" onClick={logout}>
  <LogoutOutlined />Logout
</Button>
}

export default LogoutButton;
