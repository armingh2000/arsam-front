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
import EventGrid from "./EventGrid";
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


  useEffect(() => {
  }, []);


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
                <Col span={6}>
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
  else{
    return (
      <div className="not-found">
        <FrownTwoTone className="icon"/>
        <br />
        <br />

        <h2>Oops!!! we didn't find such event</h2>

      </div>
    );
  }
}

export default UserEventsForm;
