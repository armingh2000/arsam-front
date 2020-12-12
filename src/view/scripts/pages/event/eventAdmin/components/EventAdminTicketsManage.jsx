import React, {useEffect} from "react";
import EventAdminTicketTypeList from "./EventAdminTicketTypeList";
import { getEventTicketType } from "../../../../../../core/api/actions/EventActions";
import { Spin,Typography, Row, Col } from 'antd';



const EventAdminTicketsManage = ({ticketTypes, dispatch, eventId, ticketTypeStatus}) =>
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

      return  <EventAdminTicketTypeList dispatch={dispatch} ticketTypes={ticketTypes}/>

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
