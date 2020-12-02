import React, {useEffect} from "react";
import EventAdminGrid from "./components/EventAdminGrid";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Spin,Typography, Row, Col } from 'antd';
import { getEvent } from "../../../../../core/api/actions/EventActions";


const EventAdmin = ({event, dispatch, match}) =>
{
  const {Text} = Typography;

  useEffect(() => {
    if(match.path === "/event/:eventId/admin") {
    dispatch(getEvent({
        payload:{
          eventId: match.params.eventId,
          tokenId: localStorage.getItem("userToken")
        }
      }))
    }
  }, []);

  switch (event.status) {
    case 'loading':
      return (
        <Row justify="center" align="middle" style={{minHeight:"100vh"}}>
          <Col>
            <Spin size="large"/>
          </Col>
        </Row>
      );
    case 'success':
      return <EventAdminGrid eventId={match.params.eventId} event={event} dispatch={dispatch}/>

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


const mapStateToProps = (state) => ({ event: state.event });
const ShowTheLocationWithRouter = withRouter(EventAdmin);
export default connect(mapStateToProps)(ShowTheLocationWithRouter);
