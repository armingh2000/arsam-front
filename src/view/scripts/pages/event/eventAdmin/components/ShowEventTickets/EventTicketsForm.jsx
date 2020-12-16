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

  if((props.tickets.length>0)){
      return (
      <div>

        <div>

          <Row gutter={[20,10]}>

            {
                props.tickets.map((ticket)=>{
                return(
                  <Col span={5} offset={2}>
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
  else if(props.tickets.length===0 && props.status==='Success'){
    return (
      <div id="user-tickets-form-components">
        <div className="not-found">
          <FrownTwoTone className="icon"/>
          <br />
          <br />

          <h2>Oops!!! we didn't find such ticket</h2>

        </div>
      </div>
    );
  }
  else if(props.status==='Loading'){
    return(
      <div className="distance-from-top">
        <Row justify="center" style={{minHeight:"100vh"}}>
          <Col>
            <Spin size="large"/>
          </Col>
        </Row>
      </div>
    );
  }
  else {
    return (
      <Row>
        <h1>an error occured</h1>
      </Row>
    );
  }
}

export default EventTicketsForm;
