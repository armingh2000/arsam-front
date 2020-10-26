import React, { useState } from "react";
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from "axios";

const NormalLoginForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
    const [{username, password}, setUser] = useState({username:"", password:""});

    function handleChange(event)
    {
        const {value, name} = event.target;
        setUser((prevValue) => {
            return ({
                ...prevValue,
                [name] : value
            })
        })
    }

    function handleSubmit(event)
    {
        
        console.log("handleSubmit")
        setUser({username:"", password:""});
    }

  return (
    <Form
      onSubmit={handleSubmit}
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input 
          onChange={handleChange} 
          value={username} 
          name="username" 
          prefix={<UserOutlined className="site-form-item-icon" />} 
          placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          onChange={handleChange}
          value={password}
          name="password"
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
         Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default NormalLoginForm;
