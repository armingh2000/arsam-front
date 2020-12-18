import React from "react";
import { Typography, Switch } from "antd";
import { toggleTicket } from "../../../../../../core/api/actions/EventActions";


const EventAdminTicketToggle = ({eventId, dispatch, event, oem, osm, olm}) =>
{
  const {Text} = Typography;

  function toggle () {
    dispatch(toggleTicket({payload: {event, eventId, oem, olm, osm}}));
  }



  const isTrue = event.buyingTicketEnabled;

  const color = isTrue ? "#13c2c2" : "#f5222d";

  return <div>
          <Text>Enable ticket for event: </Text>
          <Switch onClick={toggle} checked={isTrue} style={{backgroundColor:color}}/>
         </div>
}

export default EventAdminTicketToggle;
