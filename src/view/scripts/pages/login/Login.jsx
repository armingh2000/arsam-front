import React from "react";
import NormalLoginForm from "./components/NormalLoginForm";
import GLogin from "./components/GLogin";
import GLogout from "./components/GLogout";
import {Row, Col} from 'antd';

function Login() {
  return (<div id="components-form-normal-login">
    <Row style={{
        minHeight: '100vh'
      }} justify="center" align="middle">
      <Col span={16}>
        <NormalLoginForm/> {
          localStorage.getItem("userToken")
            ? <GLogout/>
            : <GLogin/>
        }
      </Col>
    </Row>
  </div>);
}

export default Login;
