import React, {useState} from "react";
import {Form, Input, Button, Checkbox, Typography} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {Link, useHistory} from 'react-router-dom';
import {sendLoginPost} from "../../../../../core/login-signup/loginRequest";
import GLogin from "./GLogin";


const NormalLoginForm = () => {

  const [failureMessage, setFailureMessage] = useState("");
  const [isFailed, setIsFailed] = useState(false);
  const {Text} = Typography;

  const history = useHistory();
  const onSuccess = ({data}) => {
    localStorage.setItem("userToken", data.token);
    history.replace("/account");
  };

  const onFailure = (error) => {
    if (error.response.status === 401) {
      setFailureMessage("Email is not confirmed yet!");
      setIsFailed(true);
    } else {
      setFailureMessage("Invalid Login Attempt!");
      setIsFailed(true);
    }
  };

  function onFinish(values) {
    sendLoginPost({Email: values.email, Password: values.password}).then(onSuccess).catch(onFailure);
  };
  console.log(localStorage.getItem("userToken"));

  return (
  <div className="box">
      <Form  name="normal_login" className="login-form" initialValues={{
        remember: true
      }} onFinish={onFinish}>

      <span className="text-center">login</span>

      <Form.Item hidden={!isFailed}>
        <Text type="danger">{failureMessage}</Text>
      </Form.Item>

      <div className="input-container">
        <Form.Item name="email" rules={[{
              required: true,
              message: 'Please input your Email!'
            }
          ]}>

          <Input type="email" prefix={<UserOutlined className = "site-form-item-icon" />} placeholder="Username"/>
        </Form.Item>
      </div>

      <div className="input-container">
        <Form.Item name="password" rules={[{
              required: true,
              message: 'Please input your Password!'
            }
          ]}>
          <Input prefix={<LockOutlined className = "site-form-item-icon" />} type="password" placeholder="Password"/>
        </Form.Item>
      </div>


      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle="noStyle">
          <Checkbox className="checkbox-color">Remember me</Checkbox>
        </Form.Item>

        {
        // TODO: forgot password manage
        // <a className="login-form-forgot" href="">
        //   Forgot password
        // </a>
        }
      </Form.Item>


      <Form.Item>
        <div className="container">
        <Button type="primary" htmlType="submit" className="login-form-button btn">
            <svg width="277" height="62">
              <defs>
                <linearGradient id="grad1">
                  <stop offset="0%" stop-color="#5adc9f" />
                  <stop offset="100%" stop-color="#71eaf5" />
                </linearGradient>
              </defs>
              <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
            </svg>
            <span>Log in</span>
        </Button>
        </div>
        <div className="login-register-now">
        Or&nbsp;
        <Link to="/signup">
          register now!</Link>
        </div>
      </Form.Item>

    </Form>
  </div>

);
};

export default NormalLoginForm;
