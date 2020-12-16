import React, {useEffect} from "react";
import EventAdminTicketTypeList from "./EventAdminTicketTypeList";
import { getEventTicketType } from "../../../../../../core/api/actions/EventActions";
import { Spin,Typography, Row, Col, message } from 'antd';
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

  const key = 'updatable';

  const openLoadMessage = () => {
    message.loading({ content: 'Loading...', key, duration: 0 });
  };

  const openSuccessMessage = () => {
      message.success({ content: 'Updated!', key, duration: 2 });
  };

  const openErrorMessage = () => {
      message.error({ content: 'Error!', key, duration: 2 });
  };

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
                <EventAdminTicketToggle dispatch={dispatch} eventId={eventId} event={event} oem={openErrorMessage} olm={openLoadMessage} osm={openSuccessMessage}/>
                <EventAdminTicketTypeList eventId={eventId} dispatch={dispatch} ticketTypes={ticketTypes} oem={openErrorMessage} olm={openLoadMessage} osm={openSuccessMessage}/>
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
