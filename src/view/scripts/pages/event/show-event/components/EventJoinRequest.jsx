import React from "react";
import {Button, message} from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { joinRequest } from "../../../../../../core/api/actions/EventActions";

const EventJoinRequest = ({eventId, dispatch}) =>
{

  const key = 'updatable';

  const openLoadMessage = () => {
    message.loading({ content: 'Loading...', key, duration: 0 });
  };

  const openSuccessMessage = () => {
      message.success({ content: 'Join Request Sent!', key, duration: 2 });
  };

  const openErrorMessage = () => {
      message.error({ content: "Error!", key, duration: 2 });
  };

  const openWarningMessage = (text) => {
      message.warning({ content: text, key, duration: 2 });
  };

  function onClick () {
    dispatch(joinRequest({payload: {eventId, owm:openWarningMessage, oem:openErrorMessage, olm:openLoadMessage, osm:openSuccessMessage}}));
  }

  return <Button type="primary" onClick={onClick}><PlusOutlined/> Join</Button>
}

export default EventJoinRequest;
