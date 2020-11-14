import React from "react";
import CreateEventForm from "./components/CreateEventForm";
import {Row, Col} from 'antd';

const CreateEvent = () => {

  return <div id="components-form-create-event">
    <Row justify="center" align="middle">
      <Col span={16}><CreateEventForm /></Col>
    </Row>
  </div>
}

export default CreateEvent;
