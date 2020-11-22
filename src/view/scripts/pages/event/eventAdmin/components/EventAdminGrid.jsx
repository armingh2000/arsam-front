import React from "react";
import EventAdminSidebar from "./EventAdminSidebar";
import {Layout} from "antd";
import ShowEvent from "../../show-event/ShowEvent";

const EventAdminGrid = () =>
{
  const { Header, Content, Footer, Sider } = Layout;

  return (
    <Layout>
      <Layout>
        <Sider> <EventAdminSidebar/> </Sider>
        <Content> <ShowEvent/> </Content>

      </Layout>
    </Layout>
  );
}

export default EventAdminGrid;
