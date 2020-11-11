import React from "react";
import EventGrid from "./components/EventGrid";
import { connect } from "react-redux";

const ShowEvent = ({showEvent, dispatch}) =>
{
    return (
        <EventGrid dispatch={dispatch} showEvent={showEvent}/>
    );
}

const mapStateToProps = (state) => ({ showEvent: state.showEvent });

export default connect(mapStateToProps)(ShowEvent);
