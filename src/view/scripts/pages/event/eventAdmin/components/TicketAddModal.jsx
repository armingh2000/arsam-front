import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio, Typography } from 'antd';
import moment from "moment";
import { updateTicketType } from "../../../../../../core/api/actions/EventActions";
import {
  PlusCircleTwoTone
} from '@ant-design/icons';
import { addTicketType } from "../../../../../../core/api/actions/EventActions";



const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Edit Ticket Info"
      okText="Add"
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
        }}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={
              [{
                  required: true,
                  message: 'Please input the name of the ticket!'
              }]
          }
        >
          <Input placeholder="ticket name"/>
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" placeholder="ticket description"/>
        </Form.Item>

        <Form.Item
          name="price"
          label="Price"
          rules={
              [{
                  required: true,
                  message: 'Please input the price of the ticket!'
              }]
          }
        >

          <Input placeholder="ticket price"/>
        </Form.Item>

        <Form.Item
          name="capacity"
          label="Capacity"
          rules={
              [{
                  required: true,
                  message: 'Please input the capacity of the ticket!'
              }]
          }
        >

          <Input placeholder="ticket capacity"/>
        </Form.Item>

      </Form>
    </Modal>
  );
};

const TicketAddModal = ({dispatch, eventId, osm, olm, oem}) => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    dispatch(addTicketType({payload: {ticket: values, eventId, osm, olm, oem}}));
    setVisible(false);
  };

  const {Text} = Typography;

  return (
    <div align="center" style={{marginTop:"10px"}} className="add-button">
      <Text>Add Ticket Type: </Text>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        <PlusCircleTwoTone />
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

export default TicketAddModal;
