import React from "react";
import { Typography, Switch } from "antd";
import { toggleTicket } from "../../../../../../core/api/actions/EventActions";


const EventAdminTicketToggle = ({eventId, dispatch, event}) =>
{
  const {Text} = Typography;

  function toggle () {
    dispatch(toggleTicket({payload: {event, eventId}}));
  }

  const isTrue = event.buyingTicketEnabled;

  const color = isTrue ? "#13c2c2" : "#f5222d";

  return <div>
          <Text>Enable ticket for event: </Text>
          <Switch onClick={toggle} defaultChecked={isTrue} style={{backgroundColor:color}}/>
         </div>
}

export default EventAdminTicketToggle;
