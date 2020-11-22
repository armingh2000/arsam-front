import React from "react";
import {
  Menu,
  Avatar
 } from 'antd';


const EventAdminSidebar = () =>
{

  return (
    <div>
      <Menu style={{backgroundColor:"powderblue"}} mode="inline">
        <Avatar>S</Avatar>
        <Menu.Item>Event</Menu.Item>
        <Menu.Item>Event Members</Menu.Item>
        <Menu.Item>Requests</Menu.Item>
      </Menu>
    </div>
  );
}

export default EventAdminSidebar;
