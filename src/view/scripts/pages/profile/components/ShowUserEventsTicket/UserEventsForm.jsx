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
import {useHistory} from 'react-router-dom';
import EventDetails from "./EventDetails";
import { withRouter } from "react-router";
import Icon from '@ant-design/icons';
import { connect } from "react-redux";
import EventMembersList from "./EventMembersList";


const UserEventsForm = (props) =>{
  const [form] = Form.useForm();

  const history = useHistory();

  function handelClick(item){
    redirectUser(item.id);
  }

  function redirectUser(eventId){
    if(props.isAdmin){
      history.replace(`/event/${eventId}/admin`);
    }
    else {
      history.replace(`/event/${eventId}`);
    }
  }


  if((props.events.length>0)){
    return (
      <div className="main-div">

        <Row gutter={[20,10]}>

          {
              props.events.map((item)=>{
              return(
                <Col xl={{span:6}} lg={{span:8}}  md={{span:12}} sm={{span:12}} xs={{span:24}}>
                  <Card className="card" onClick={()=>handelClick(item)}>


                    <EventDetails
                          name={item.name}
                          startDate={item.startDate}
                          endDate={item.endDate}
                          creator={item.creator}
                          categories={item.categories}/>
                    <br />

                    <EventMembersList
                          members={item.eventMembers}/>

                  </Card>
                </Col>
              );
            })
          }

        </Row>

      </div>
    );
  }
  else if(props.events.length===0 && props.status==='Success'){
    return (
      <div className="not-found">
        <FrownTwoTone className="icon"/>
        <br />
        <br />

        <h2>Oops!!! we didn't find such event</h2>

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

export default UserEventsForm;
