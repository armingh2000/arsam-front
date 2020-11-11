import React from "react";
import EventGrid from "./components/EventGrid";
import { connect } from "react-redux";
import { getEvent } from "../../../../../core/api/actions/EventActions";

const ShowEvent = ({event, dispatch}) =>
{

    return (
        <EventGrid dispatch={dispatch} event={event.event}/>
    );
}

const mapStateToProps = (state) => ({ event: state.event });

export default connect(mapStateToProps)(ShowEvent);
