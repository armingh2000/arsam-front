import React, {useState, useEffect} from 'react';
import axios from "axios";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Typography,
  Checkbox,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Upload,
  Card,
  Spin
} from 'antd';
import moment from 'moment';
import { UploadOutlined, InboxOutlined, FrownOutlined, FrownTwoTone, FilterTwoTone, RobotOutlined } from '@ant-design/icons';
import TicketDetails from "./TicketDetails";
import { withRouter } from "react-router";
import Icon from '@ant-design/icons';
import { connect } from "react-redux";


const EventTicketsForm = (props) =>{
  const {Text} = Typography;

  if((props.tickets.length>0)){
      return (
      <div>

        <div>

          <Row gutter={[20,10]}>

            {
                props.tickets.map((ticket)=>{
                return(
                  <Col xs={22} md={6}>
                    <Card className="card">
                      <TicketDetails
                          type={ticket.type}
                          user={ticket.user}
                      />
                      <br />

                    </Card>
                  </Col>
                );
              })
            }

          </Row>

        </div>
      </div>
      );
  }
  else {
    return (
      <Row justify="center" align="middle" style={{minHeight:"100vh"}}>
        <Col>
          <Text type="danger">Sorry, no tickets found!</Text>
        </Col>
      </Row>
    );
  }


}

export default EventTicketsForm;
