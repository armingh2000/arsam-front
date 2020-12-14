import React, {useEffect} from "react";
import EventAdminTicketTypeList from "./EventAdminTicketTypeList";
import { getEventTicketType } from "../../../../../../core/api/actions/EventActions";
import { Spin,Typography, Row, Col } from 'antd';
import EventAdminTicketToggle from "./EventAdminTicketToggle";



const EventAdminTicketsManage = ({ticketTypes, dispatch, eventId, ticketTypeStatus, event}) =>
{

  useEffect(() => {
    dispatch(getEventTicketType({
        payload: {
          eventId
        }
    }));
  }, []);

  const {Text} = Typography;

  switch (ticketTypeStatus) {
    case 'loading':

      return (
        <Row justify="center" align="middle" style={{minHeight:"100vh"}}>
          <Col>
            <Spin size="large"/>
          </Col>
        </Row>
      );
    case 'success':

      return  <div>
                <EventAdminTicketToggle dispatch={dispatch} eventId={eventId} event={event}/>
                <EventAdminTicketTypeList eventId={eventId} dispatch={dispatch} ticketTypes={ticketTypes}/>
              </div>

    case 'error':
      return (
        <Row justify="center" align="middle" style={{minHeight:"100vh"}}>
          <Col>
            <Text type="danger">Please try again!</Text>
          </Col>
        </Row>
      );

    default:
      return <div></div>;
  }
}

export default EventAdminTicketsManage;
