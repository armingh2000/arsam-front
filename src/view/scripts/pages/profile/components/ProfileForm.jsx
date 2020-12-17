import React from "react";
import {Form, Button} from 'antd';
import {useHistory} from 'react-router-dom';
import LogoutButton from "./LogoutButton";

const ProfileForm = () => {


  const history = useHistory();

  function onFinish(values) {
    history.replace("/createevent");
  };

  return (
    <div className="box">

      <Form
      className="center-form"
      initialValues={{remember: true}}
      onFinish={onFinish}
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 16 }}
      >

      <span className="text-center">Profile</span>

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

            <span className="center-span">Create Event</span>

          </Button>

        </Form.Item>

        
    </Form>

  </div>
);
};

export default ProfileForm;
