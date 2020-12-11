import React from "react";
import {
  Menu,
  Avatar,
  Typography
 } from 'antd';
 import {setAdminContent, setRequest} from "../../../../../../core/api/actions/EventActions";


const EventAdminSidebar = ({event, dispatch}) =>
{

  const {Text} = Typography;

  const setContent = (content) => {
    if (content === "eventRequest") {

    }

    dispatch(setAdminContent({
        payload: {
          content
        }
      })
    )
  }

  return (
    <div>
      <Menu defaultSelectedKeys={["1"]} theme="light" mode="inline" style={{background:"linear-gradient(to bottom right, rgba(255, 255, 255, 0.89)0%, rgba(247, 252, 252, 0.89)100%)"}}>
        <Avatar size={150} shape="square" style={{margin:"23px", color: 'white', backgroundColor: '#73cac5'}}>{event.event.name}</Avatar>
        <Menu.Item key="1" onClick={() => {setContent("event")}}>Event</Menu.Item>
        <Menu.Item onClick={() => {setContent("eventMembers")}}>Event Members</Menu.Item>
        <Menu.Item onClick={() => {setContent("eventRequest")}}>Event Requests</Menu.Item>
      </Menu>
    </div>
  );
}

export default EventAdminSidebar;
