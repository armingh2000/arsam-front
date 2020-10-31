import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import {Row, Col} from 'antd';

const Signup = () => {

  return <div id="components-form-demo-normal-signup">
    <Row style={{
        minHeight: '100vh'
      }} justify="center" align="middle">
      <Col span={17}><RegistrationForm/></Col>
      <Col span={1}/>
    </Row>
  </div>
}

export default Signup;
