import React from "react";
import NormalLoginForm from "./components/NormalLoginForm";
import GLogin from "./components/GLogin";
import GLogout from "./components/GLogout";
import {Row, Col} from 'antd';

function Login() {
  return (<div>
    <Row style={{
        minHeight: '100vh'
      }} justify="center" align="middle">
      <Col span={6}>
        <NormalLoginForm/>
        {localStorage.getItem("userToken") ? <GLogout /> : <GLogin />}
      </Col>
    </Row>
  </div>)
}

export default Login;
