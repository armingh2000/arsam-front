import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import {Row, Col} from 'antd';

const Signup = () => {

  return <div>
    <Row style={{
        minHeight: '100vh'
      }} justify="center" align="middle">
      <Col span={9}><RegistrationForm/></Col>
      <Col span={2}/>
    </Row>
  </div>
}

export default Signup;
