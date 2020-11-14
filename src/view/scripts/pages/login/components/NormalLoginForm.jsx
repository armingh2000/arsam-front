import React, {useState} from "react";
import {Form, Input, Button, Checkbox, Typography, Row, Col} from 'antd';
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

  return (
    <div className="box">

      <Form
      name="normal_login"
      className="center-form"
      initialValues={{remember: true}}
      onFinish={onFinish}
      // colon={16}
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 16 }}
      >

      <span className="text-center">login</span>

      <Form.Item hidden={!isFailed}>
        <Text type="danger">{failureMessage}</Text>
      </Form.Item>


      <Form.Item
      label="email / user name"
      name="email"
      rules={[{required: true,message: 'Please input your Email!'}]}
      >
        <Input
        className="get-border-radius"
        type="email"
        prefix={<UserOutlined className = "site-form-item-icon" />}
        placeholder="Username"/>
      </Form.Item>


      <Form.Item
      label="password"
      name="password"
      rules={[{required: true,message: 'Please input your Password!'}]}
      >

        <Input
        className="get-border-radius"
        prefix={<LockOutlined className = "site-form-item-icon" />}
        type="password"
        placeholder="Password"/>

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
    </Form>

  </div>
);
};

export default NormalLoginForm;
