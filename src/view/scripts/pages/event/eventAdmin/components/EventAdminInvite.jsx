import React from "react";
import {
  Input,
  Form,
  Button
} from "antd";
import { setMember } from "../../../../../../core/api/actions/EventActions";
import { UserOutlined } from '@ant-design/icons';


const EventAdminInvite = ({dispatch, eventId, }) =>
{
  const {Search} = Input;

  function onFinish(data) {
    dispatch(setMember({payload:{eventId, email: data.email}}))
  }

  return (
    <div>
      <Form
      name="add_member"
      onFinish={onFinish}
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
          <Input prefix={<UserOutlined />} placeholder="Member username" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Member
          </Button>
        </Form.Item>

    </Form>
    </div>
  );
}

export default EventAdminInvite;
