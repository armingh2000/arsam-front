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
    dispatch(getEvent({
        payload:{
          eventId: match.params.eventId,
          tokenId: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJ0ZXN0MkB0ZXN0Mi5jb20iLCJuYmYiOjE2MDU0NTg1MDQsImV4cCI6MTYwNTU0NDkwNCwiaWF0IjoxNjA1NDU4NTA0fQ.e7iIDj3N2ochoGStlkTdrBFyDm9Y04zS0qcxtCEIgPknbKTqmIPHPT24Wx_9a36oZp1sp2v25yOZWXL-Y3O0gg"
        }
      }))
  }, []);

  // switch (event.status) {
  //   case 'loading':
  //     return (
  //       <Row justify="center" align="middle" style={{minHeight:"100vh"}}>
  //         <Col>
  //           <Spin size="large"/>
  //         </Col>
  //       </Row>
  //     );
  //   case 'success':
      return (<div id="show-event-component">
            <EventGrid dispatch={dispatch} event={event.event} eventId={match.params.eventId}/>
          </div>
        );


  //   case 'error':
  //     return (
  //       <Row justify="center" align="middle" style={{minHeight:"100vh"}}>
  //         <Col>
  //           <Text type="danger">Please try again!</Text>
  //         </Col>
  //       </Row>
  //     );
  //
  //   default:
  //     return <div></div>;
  // }
}


const mapStateToProps = (state) => ({ event: state.event });
const ShowTheLocationWithRouter = withRouter(ShowEvent);
export default connect(mapStateToProps)(ShowTheLocationWithRouter);
