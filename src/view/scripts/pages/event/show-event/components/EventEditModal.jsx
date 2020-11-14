import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
import EventDatePicker from "./EventDatePicker";
import moment from "moment";

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          publicity: 'public',
          name: "event name",
          description: "event description",
        }}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={
              [{ 
                  required: true,
                  message: 'Please input the name of the event!' 
              }]
          }
        >
          <Input/>
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item 
          name="dateTime" 
          label="Date and Time"
      >
            <EventDatePicker currentDate={[moment(), moment()]} form={form}/>
        </Form.Item>
        <Form.Item name="publicity">
          <Radio.Group>
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const EventEditModal = () => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };

  return (
    <div align="right" style={{marginTop:"50px"}}>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Edit
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default EventEditModal;
