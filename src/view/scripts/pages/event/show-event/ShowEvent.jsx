import React, {useEffect} from "react";
import EventGrid from "./components/EventGrid";
import { connect } from "react-redux";
import { getEvent } from "../../../../../core/api/actions/EventActions";
import { withRouter } from "react-router";


const ShowEvent = ({event, dispatch, match}) =>
{
  useEffect(() => {
    dispatch(getEvent({
        payload:{
          eventId: match.params.eventId,
          tokenId: localStorage.getItem("userToken")
        }
      }))
  }, []);

  return (<div id="show-event-component">
        <EventGrid dispatch={dispatch} event={event.event} eventId={match.params.eventId}/>
      </div>
  );
}

const mapStateToProps = (state) => ({ event: state.event });
const ShowTheLocationWithRouter = withRouter(ShowEvent);
export default connect(mapStateToProps)(ShowTheLocationWithRouter);
