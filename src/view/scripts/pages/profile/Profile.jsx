import React from "react";
import ProfileForm from "./components/ProfileForm";
import {Row, Col} from 'antd';

const Profile = () =>
{
  console.log("userToken :" + localStorage.getItem("userToken"));
  return (<div id="components-form-profile">
  <Row style={{
      minHeight: '100vh'
    }} justify="center" align="middle">
    <Col span={16}>
      <ProfileForm />
    </Col>
  </Row>
    </div>
  );
};

export default Profile;
