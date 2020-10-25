import React from "react";
import NormalLoginForm from "./components/NormalLoginForm";
import { Row, Col } from 'antd';

function Login()
{
    return (
        <div>
            <Row justify="center" align="middle">
                <Col span={8} />
                <Col span={8}><NormalLoginForm /></Col>
                <Col span={8} />
            </Row>
        </div>
    )
}

export default Login;
