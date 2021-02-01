import React, {useState} from "react";
import {Form, Input, Button, Checkbox, Typography} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {Link, useHistory} from 'react-router-dom';
import {sendLoginPost} from "../../../../../core/login-signup/loginRequest";


const NormalLoginForm = () => {
  var email;

  const [failureMessage, setFailureMessage] = useState("");
  const [isFailed, setIsFailed] = useState(false);
  const {Text} = Typography;

  const history = useHistory();
  const onSuccess = ({data}) => {
    localStorage.setItem("userToken", data.token);
    history.replace(`/profile/${data.id}`);
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
    email=values.email;
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


      <div className="checkbox-center">
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
      </div>

        <Form.Item>

          <Button htmlType="submit" className="btn center-button" >
            <svg width="100%" height="100%">
              <defs>
                <linearGradient id="grad1">
                  <stop offset="0%" stop-color="#7183f5" />
                  <stop offset="100%" stop-color="#74ddfc" />
                </linearGradient>
              </defs>
              <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="97%" height="85%"></rect>
            </svg>

            <span className="center-span">Log in</span>

          </Button>

          <div className="link-location">
            Or&nbsp;
            <Link to="/signup">register now!</Link>
          </div>
        </Form.Item>
    </Form>

  </div>
);
};

export default NormalLoginForm;
