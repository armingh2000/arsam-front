import React from "react";
import {
  Menu,
  Avatar,
  Typography
 } from 'antd';
 import {setAdminContent, setRequest} from "../../../../../../core/api/actions/EventActions";


const EventAdminSidebar = ({event, dispatch}) =>
{

  const {SubMenu} = Menu;

  const setContent = (content) => {

    dispatch(setAdminContent({
        payload: {
          content
        }
      })
    )
  }

    const isProject = event.event.isProject;

    return (
    <div>
      <Menu defaultSelectedKeys={[event.adminContent]} defaultOpenKeys={["sub"]} theme="light" mode="inline" style={{background:"linear-gradient(to bottom right, rgba(255, 255, 255, 0.89)0%, rgba(247, 252, 252, 0.89)100%)"}}>
        <Avatar size={150} shape="square" style={{margin:"23px", color: 'white', backgroundColor: '#73cac5'}}>{event.event.name}</Avatar>
          <Menu.Item key="event" onClick={() => {setContent("event")}}>Event</Menu.Item>
          {isProject && <Menu.Item key="eventMembers" onClick={() => {setContent("eventMembers")}}>Members</Menu.Item>}
          {isProject && <Menu.Item key="eventRequest" onClick={() => {setContent("eventRequest")}}>Requests</Menu.Item>}
          {!isProject && <SubMenu title="Event Tickets" key="sub">
                             <Menu.Item key="eventTickets" onClick={() => {setContent("eventTickets")}}>Tickets</Menu.Item>
                             <Menu.Item key="eventTicketsManage" onClick={() => {setContent("eventTicketsManage")}}>Manage Tickets</Menu.Item>
                         </SubMenu>}
      </Menu>
    </div>
  );
}

export default EventAdminSidebar;
