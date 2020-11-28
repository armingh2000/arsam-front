import React from "react";
import {
  Menu,
  Avatar
 } from 'antd';
 import {setAdminContent} from "../../../../../../core/api/actions/EventActions";


const EventAdminSidebar = ({creator, dispatch}) =>
{

  const setContent = (content) => {
    dispatch(setAdminContent({
        payload: {
          content
        }
      })
    )
  }

  return (
    <div>
      <Menu style={{backgroundColor:"powderblue"}} mode="inline">
        <Avatar size={150} style={{margin:"23px", color: '#f56a00', backgroundColor: '#fde3cf'}}>{creator.email.charAt(0)}</Avatar>
        <Menu.Item onClick={() => {setContent("event")}}>Event</Menu.Item>
        <Menu.Item onClick={() => {setContent("eventMembers")}}>Event Members</Menu.Item>
      </Menu>
    </div>
  );
}

export default EventAdminSidebar;
