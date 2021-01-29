import React from "react";
import {Row, Col} from 'antd';
import LandingForm from './components/LandingForm';

const LandingPage = () => {

  return <div id="landing-page">
    <Row justify="center" align="middle">
      <Col span={22}><LandingForm /></Col>
    </Row>
  </div>
}

export default LandingPage;
