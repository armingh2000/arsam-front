import React from "react";
import EventAdminSidebar from "./EventAdminSidebar";
import {Layout} from "antd";
import ShowEvent from "../../show-event/ShowEvent";
import EventAdminMembers from "./EventAdminMembers";
import EventAdminRequest from "./EventAdminRequest";
import EventAdminTickets from "./EventAdminTickets";
import EventAdminTicketsManage from "./EventAdminTicketsManage";


const EventAdminGrid = ({eventId, event, dispatch}) =>
{
  const { Header, Content, Footer, Sider } = Layout;

  function getAdminContent(event) {
    switch (event.adminContent) {
      case "event":
        return <ShowEvent />

      case "eventMembers":
        return (<div id="admin-members">
          <EventAdminMembers creator={event.event.creator} dispatch={dispatch} eventId={eventId} admins={event.event.eventAdmins} members={event.event.eventMembers}/>
        </div>)

      case "eventRequest":
        return (<div id="admin-request">
          <EventAdminRequest requests={event.event.requests} requestStatus={event.requestStatus} eventId={eventId} dispatch={dispatch}/>
        </div>
        )

      case "eventTickets":
        return (<div id="admin-tickets">
          <EventAdminTickets />
        </div>)

      case "eventTicketsManage":
        return (<div id="admin-tickets-manage">
          <EventAdminTicketsManage event={event.event} ticketTypeStatus={event.ticketTypeStatus} dispatch={dispatch} eventId={eventId} ticketTypes={event.ticketTypes}/>
        </div>)

      default:
        return <div></div>
      }
  }

  return (
    <div>
      <Layout>
        <Sider id="admin-sider" style={{backgroundColor:"#E6F7FF"}}><EventAdminSidebar event={event} dispatch={dispatch}/></Sider>
        <Content>
          {getAdminContent(event)}
         </Content>

      </Layout>
    </div>
  );
}

export default EventAdminGrid;
