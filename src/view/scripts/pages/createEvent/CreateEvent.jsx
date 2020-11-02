import React from "react";
import CreateEventForm from "./components/CreateEventForm";
import {Row, Col} from 'antd';

const CreateEvent = () => {

  return <div>
    <Row style={{
        minHeight: '100vh'
      }} justify="start" align="middle">
      <Col span={2}></Col>
      <Col span={20}><CreateEventForm /></Col>
      <Col span={2}/>
    </Row>
  </div>
}

export default CreateEvent;
