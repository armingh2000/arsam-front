import React, {useEffect} from "react";
import EventGrid from "./components/EventGrid";
import { connect } from "react-redux";
import { getEvent } from "../../../../../core/api/actions/EventActions";
import { withRouter } from "react-router";
import { Spin,Typography, Row, Col } from 'antd';

const ShowEvent = ({event, dispatch, match}) =>
{
  const {Text} = Typography;

    useEffect(() => {
      if(match.path === "/event/:eventId") {
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
      return (<div id="show-event-component">
            <EventGrid ticketTypes={event.ticketTypes} dispatch={dispatch} event={event.event} eventId={match.params.eventId} role={event.event.myRole}/>
          </div>
        );


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


const mapStateToProps = (state) => ({ event: state.event});
const ShowTheLocationWithRouter = withRouter(ShowEvent);
export default connect(mapStateToProps)(ShowTheLocationWithRouter);
