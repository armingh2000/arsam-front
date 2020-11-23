import React from "react";
import EventAdminSidebar from "./EventAdminSidebar";
import {Layout} from "antd";
import ShowEvent from "../../show-event/ShowEvent";

const EventAdminGrid = ({event, dispatch}) =>
{
  const { Header, Content, Footer, Sider } = Layout;

  function getAdminContent(event) {
    switch (event.adminContent) { 
      case "event":
        return <ShowEvent />

      case "eventMembers":
        return <div>eventMembers</div>

      default:
        return <div>default</div>
      }
  }

  return (
    <Layout>
      <Layout>
        <Sider> <EventAdminSidebar creator={event.event.creator} dispatch={dispatch}/> </Sider>
        <Content>
          {getAdminContent(event)}
         </Content>

      </Layout>
    </Layout>
  );
}

export default EventAdminGrid;
