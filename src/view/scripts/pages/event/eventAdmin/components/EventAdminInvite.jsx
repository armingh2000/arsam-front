import React from "react";
import {
  Input,
  Form,
  Button
} from "antd";
import { setMember } from "../../../../../../core/api/actions/EventActions";
import { UserOutlined } from '@ant-design/icons';


const EventAdminInvite = ({dispatch, eventId, osm, oem, olm}) =>
{
  const {Search} = Input;

  function onFinish(data) {

    dispatch(setMember({payload:{eventId, email: data.email, olm, osm, oem}}))
  }

  return (
    <div className="admin-invite">
      <Form
      name="add_member"
      onFinish={onFinish}
      layout="inline"
      >
        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            }
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Member username"/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="invite-button">
            Add Member
          </Button>
        </Form.Item>

    </Form>
    </div>
  );
}

export default EventAdminInvite;
