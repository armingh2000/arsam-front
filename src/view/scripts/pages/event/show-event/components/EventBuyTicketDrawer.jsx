import React, {useState, useEffect} from "react";
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { getEventTicketType, createTicket } from "../../../../../../core/api/actions/EventActions";
import EventTicketTypeList from "./EventTicketTypeList";


const EventBuyTicketDrawer = ({eventId, dispatch, ticketTypes, buyingTicketEnabled, isProject}) =>
{

  useEffect(() => {
    dispatch(getEventTicketType({
        payload: {
          eventId
        }
    }));
  }, []);


  const key = 'updatable';

  const openLoadMessage = () => {
    message.loading({ content: 'Loading...', key, duration: 0 });
  };

  const openSuccessMessage = () => {
      message.success({ content: 'Successfully Bought Ticket!', key, duration: 2 });
  };

  const openErrorMessage = (text) => {
      message.error({ content: text, key, duration: 2 });
  };


  const { Option } = Select;

  const [state, setState] = useState({visible: false});

  const showDrawer = () => {
    setState({
      visible: true,
    });
  };

  const onClose = () => {
    setState({
      visible: false,
    });
  };

  const onFinish = (values) => {
    dispatch(createTicket({payload: {email: values.email, typeId: values.type,
      olm: openLoadMessage, osm: openSuccessMessage, oem: openErrorMessage,
      eventId
      }}));
  }

  return (ticketTypes.length>0 && buyingTicketEnabled && !isProject && <div>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> Ticket
      </Button>
      <Drawer
        title="Buy a ticket"
        width={400}
        onClose={onClose}
        visible={state.visible}
        bodyStyle={{ paddingBottom: 80 }}
        style={{minHeight:"100vh"}}
      >
        <Form layout="vertical" hideRequiredMark onFinish={onFinish}>
              {// <Form.Item
              //   name="email"
              //   label="Your Email"
              //   rules={[
              //     { required: true, message: 'Please enter your email' },
              //     {
              //       type: 'email',
              //       message: 'The input is not valid E-mail!'
              //     }
              //   ]}
              // >
              //   <Input placeholder="Please enter your email" />
              // </Form.Item>
}
              <Form.Item
                name="type"
                label="Type"
                rules={[{ required: true, message: 'Please choose ticket type' }]}
              >
                <Select placeholder="Please choose ticket type">
                  {ticketTypes.map((type, index) => {return <Option value={type.id}>{type.name}</Option>})}
                </Select>
              </Form.Item>

              <Form.Item>
                <div
                  style={{
                    textAlign: 'right',

                  }}
                >
                  <Button onClick={onClose} style={{ marginRight: 8 }}>
                    Cancel
                  </Button>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </div>
              </Form.Item>

              <Form.Item >
                <EventTicketTypeList ticketTypes={ticketTypes} />
              </Form.Item>



        </Form>
      </Drawer>
    </div>
  )
}

export default EventBuyTicketDrawer;
