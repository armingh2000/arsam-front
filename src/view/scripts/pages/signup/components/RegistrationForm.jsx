import React, {useState} from 'react';
import {sendSignupPost} from "../../../../../core/login-signup/signupRequest";
import {Form, Input, Button, Typography} from 'antd';
import {Link, useHistory} from 'react-router-dom';
import openNotificationWithIcon from "../../../../../core/login-signup/openNotificationWithIcon";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 8
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 16
    }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};

const RegistrationForm = () => {

  const [form] = Form.useForm();

  const [failureMessage, setFailureMessage] = useState("");
  const [isFailed, setIsFailed] = useState(false);
  const {Text} = Typography;
  const history = useHistory();

  const onFailure = (error) => {
    setFailureMessage("username used");
    setIsFailed(true);
  };

  const onSuccess = (data) => {
    localStorage.setItem("userToken", data.data.token);
    openNotificationWithIcon({history:history, type:"success", desc:true, dur:0});
  };

  const onFinish = (values) => {
    sendSignupPost({"EmailAddress": values.email, "Password": values.password, "PasswordConfirmation": values.confirm}).then(onSuccess).catch(onFailure);
  };

  return (
    <div className="box">

      <Form className="center-form"
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 16 }}
      form={form} name="register"
      onFinish={onFinish}
      scrollToFirstError="scrollToFirstError">

      <span className="text-center">signup</span>

      <Form.Item hidden={!isFailed}>
        <Text type="danger">{failureMessage}</Text>
      </Form.Item>

      <Form.Item name="email" label="E-mail" rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!'
          }, {
            required: true,
            message: 'Please input your E-mail!'
          }
        ]}>
        <Input className="get-border-radius"/>
      </Form.Item>

      <Form.Item name="password" label="Password" rules={[
          {
            required: true,
            message: 'Please input your password!'
          }, {
            min: 3,
            message: 'Password must be at least in length of 3!'
          }
        ]} hasFeedback="hasFeedback">
        <Input.Password className="get-border-radius"/>
      </Form.Item>

      <Form.Item name="confirm" label="Confirm Password" dependencies={['password']} hasFeedback="hasFeedback" rules={[
          {
            required: true,
            message: 'Please confirm your password!'
          },
          ({getFieldValue}) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            }
          })
        ]}>
        <Input.Password className="get-border-radius"/>
      </Form.Item>

      {
        // TODO: recaptcha
        // <Form.Item label="Captcha" extra="We must make sure that your are a human.">
        //   <Row gutter={8}>
        //     <Col span={12}>
        //       <Form.Item name="captcha" noStyle="noStyle" rules={[{
        //             required: true,
        //             message: 'Please input the captcha you got!'
        //           }
        //         ]}>
        //         <Input/>
        //       </Form.Item>
        //     </Col>
        //     <Col span={12}>
        //       <Button>Get captcha</Button>
        //     </Col>
        //   </Row>
        // </Form.Item>
      }

      <Form.Item>
        <Button className="btn center-button" htmlType="submit" style={{ width: "100%"}}>
          <svg width="100%" height="100%">
            <defs>
              <linearGradient id="grad1">
                <stop offset="0%" stop-color="#7183f5" />
                <stop offset="100%" stop-color="#74ddfc" />
              </linearGradient>
            </defs>
            <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="97%" height="85%"></rect>
          </svg>

          <span className="center-span">Register</span>
        </Button>
      </Form.Item>
    </Form>

    <div className="link-location">
      <Link to="/login">back to login!</Link>
    </div>

  </div>
);
};

export default RegistrationForm;
