import React, {useState} from 'react';
import axios from "axios";
import {
  Tabs,
  Layout,
  Row,
  Col,
  Form,
  Input,
  Image,
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
  Divider,
  Upload } from 'antd';
import EventusIcon from "../Images/eventus-good.png";
import ARSAMIcon from "../Images/arsam-good.png";
import { UploadOutlined, InboxOutlined , CalendarTwoTone, SketchOutlined } from '@ant-design/icons';
import {useHistory} from 'react-router-dom';
import EventTypes from "./EventTypes";
import Features from "./Features";

const LandingForm = () =>{

  const history = useHistory();
  const { TabPane } = Tabs;

  function handleOnClick(){
    history.replace('/signup');
  }

  return (
    <div className="box">

      <div>
        <h1 className="head">Best way to Plan Your Events</h1>
        <h3 className="text-center">Experience different feelings</h3>
        <div className="signup-button-up-div">
          <Button onClick={handleOnClick} className="signup-button-up" shape="round">
            Join us
          </Button>
        </div>
      </div>


      <div>
        <Tabs defaultActiveKey="1" centered>

          <TabPane tab={<div><CalendarTwoTone/>Event Types</div> } key="1">
            <EventTypes />
          </TabPane>



          <TabPane tab={<div><SketchOutlined/>Features</div>} key="2">
            <Features />
          </TabPane>

        </Tabs>
      </div>

      <hr />


      <div className="signup-button-div">
        <Button onClick={handleOnClick} className="signup-button" shape="round">
          Signup Now
        </Button>
      </div>


    </div>
  );

}

export default LandingForm;
