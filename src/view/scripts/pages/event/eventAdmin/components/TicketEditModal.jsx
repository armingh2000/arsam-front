import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio, InputNumber } from 'antd';
import moment from "moment";
import { updateTicketType } from "../../../../../../core/api/actions/EventActions";

const CollectionCreateForm = ({ visible, onCreate, onCancel, ticket }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Edit Ticket Info"
      okText="Apply"
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
          name: ticket.name,
          description: ticket.description,
          price: ticket.price,
          capacity: ticket.capacity,
          id: ticket.id
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
          <Input/>
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" />
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
        <InputNumber placeholder="ticket price" min="0" style={{width:"100%"}}/>
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
        <InputNumber placeholder="ticket capacity" min="0" style={{width:"100%"}}/>
        </Form.Item>

        <Form.Item
          name="id"
          style={{position:"absolute"}}
        >
        </Form.Item>
      </Form>
    </Modal>
  );
};

const TicketEditModal = ({ticket, dispatch, osm, olm, oem}) => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    dispatch(updateTicketType({payload: {ticket: values, oem, olm, osm}}));
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
        ticket={ticket}
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default TicketEditModal;
