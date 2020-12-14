import React, {useEffect} from "react";
import { getTickets } from "../../../../../../core/api/actions/EventActions";
import { connect } from "react-redux";
import { Spin,Typography, Row, Col } from 'antd';


const EventAdminTickets = ({eventId, dispatch, ticketStatus}) =>
{
  useEffect(() => {
    dispatch(getTickets({payload: {eventId}}));
  }, []);

  const {Text} = Typography;

  switch (ticketStatus) {
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
                YEY!:D
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

export default EventAdminTickets;
