import React, {useState, useEffect} from "react";
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { getEventTicketType } from "../../../../../../core/api/actions/EventActions";


const EventBuyTicketDrawer = ({eventId, dispatch, ticketTypes}) =>
{

    useEffect(() => {
      dispatch(getEventTicketType({
          payload: {
            eventId
          }
      }));
    }, []);


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


  return (
    <div>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> New account
      </Button>
      <Drawer
        title="Create a new account"
        width={300}
        onClose={onClose}
        visible={state.visible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: 'right',
            }}
          >
            <Button onClick={onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </div>
        }
      >
        <Form layout="vertical" hideRequiredMark>
              <Form.Item
                name="email"
                label="Your Email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!'
                  }
                ]}
              >
                <Input placeholder="Please enter your email" />
              </Form.Item>

              <Form.Item
                name="type"
                label="Type"
                rules={[{ required: true, message: 'Please choose ticket type' }]}
              >
                <Select placeholder="Please choose ticket type">
                  {ticketTypes.map((type, index) => {return <Option value={type.id}>{type.name}</Option>})}
                </Select>
              </Form.Item>

        </Form>
      </Drawer>
    </div>
  )
}

export default EventBuyTicketDrawer;
