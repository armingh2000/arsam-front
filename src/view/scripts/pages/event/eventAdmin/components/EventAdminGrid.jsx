import React from "react";
import EventAdminSidebar from "./EventAdminSidebar";
import {Layout} from "antd";
import ShowEvent from "../../show-event/ShowEvent";
import EventAdminMembers from "./EventAdminMembers";


const EventAdminGrid = ({eventId, event, dispatch}) =>
{
  const { Header, Content, Footer, Sider } = Layout;

  function getAdminContent(event) {
    switch (event.adminContent) {
      case "event":
        return <ShowEvent />

      case "eventMembers":
        return (<div id="admin-members">
          <EventAdminMembers dispatch={dispatch} eventId={eventId} admins={event.event.eventAdmins} members={event.event.eventMembers}/>
        </div>)

      default:
        return <div></div>
      }
  }

  return (
    <div>
      <Layout>
        <Sider style={{backgroundColor:"#73cac5"}}> <div id="admin-sidebar"><EventAdminSidebar creator={event.event.creator} dispatch={dispatch}/></div> </Sider>
        <Content>
          {getAdminContent(event)}
         </Content>

      </Layout>
    </div>
  );
}

export default EventAdminGrid;
