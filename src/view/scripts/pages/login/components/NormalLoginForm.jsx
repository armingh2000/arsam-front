import React, {useState} from "react";
import {Form, Input, Button, Checkbox, Typography} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {Link, useHistory} from 'react-router-dom';
import {sendLoginPost} from "../../../../../core/login-signup/loginRequest";

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

  return (<Form id="components-form-demo-normal-login" name="normal_login" className="login-form" initialValues={{
      remember: true
    }} onFinish={onFinish}>
    <Form.Item hidden={!isFailed}>
      <Text type="danger">{failureMessage}</Text>
    </Form.Item>
    <Form.Item name="email" rules={[{
          required: true,
          message: 'Please input your Email!'
        }
      ]}>
      <Input type="email" prefix={<UserOutlined className = "site-form-item-icon" />} placeholder="Username"/>
    </Form.Item>
    <Form.Item name="password" rules={[{
          required: true,
          message: 'Please input your Password!'
        }
      ]}>
      <Input prefix={<LockOutlined className = "site-form-item-icon" />} type="password" placeholder="Password"/>
    </Form.Item>
    <Form.Item>
      <Form.Item name="remember" valuePropName="checked" noStyle="noStyle">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      {
        // TODO: forgot password manage
        // <a className="login-form-forgot" href="">
        //   Forgot password
        // </a>
      }
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit" className="login-form-button">
        Log in
      </Button>
      Or&nbsp;
      <Link to="/signup">
        register now!</Link>
    </Form.Item>
  </Form>);
};

export default NormalLoginForm;
