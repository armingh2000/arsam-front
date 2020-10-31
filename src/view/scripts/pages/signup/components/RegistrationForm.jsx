import React, {useState} from 'react';
import {sendSignupPost} from "../../../../../core/login-signup/signupRequest";
import {Form, Input, Button, Typography} from 'antd';
import {useHistory} from 'react-router-dom';

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
    history.replace("/account");
  };

  const onFinish = (values) => {
    sendSignupPost({"EmailAddress": values.email, "Password": values.password, "PasswordConfirmation": values.confirm}).then(onSuccess).catch(onFailure);
  };

  return (
<div className="box">

    <Form {...formItemLayout} form={form} name="register"
    className="signup-form"
    onFinish={onFinish} scrollToFirstError="scrollToFirstError">

    <span className="text-center">signup</span>

    <Form.Item hidden={!isFailed}>
      <Text type="danger">{failureMessage}</Text>
    </Form.Item>

    <div className="input-container">
      <Form.Item name="email" label="E-mail" rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!'
          }, {
            required: true,
            message: 'Please input your E-mail!'
          }
        ]}>
        <Input/>
      </Form.Item>
    </div>

    <div className="input-container">
      <Form.Item name="password" label="Password" rules={[
          {
            required: true,
            message: 'Please input your password!'
          }, {
            min: 3,
            message: 'Password must be at least in length of 3!'
          }
        ]} hasFeedback="hasFeedback">
        <Input.Password/>
      </Form.Item>
    </div>

    <div className="input-container">
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
        <Input.Password/>
      </Form.Item>
    </div>

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

    <Form.Item {...tailFormItemLayout}>
      <Button type="primary" htmlType="submit" style={{
          width: "100%"
        }}>
        Register
      </Button>
    </Form.Item>
  </Form>
</div>);
};

export default RegistrationForm;
