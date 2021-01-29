import React, {useState} from 'react';
import axios from "axios";
import {
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
  Upload } from 'antd';
import EventusIcon from "../Images/eventus-good.png";
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import {useHistory} from 'react-router-dom';

const LandingForm = () =>{

  const history = useHistory();

  function handleOnClick(){
    history.replace('/signup');
  }

  return (
    <div className="box">


      <div className="img-div">
      <Image
      width={200}
      src={EventusIcon}
      />
      </div>

      <div>
        <h1 className="head">Best way to Plan Your Events</h1>
      </div>

      <Button onClick={handleOnClick} className="center-button" style={{width: "100%"}}>
          Signup Now
      </Button>

    </div>
  );

}

export default LandingForm;
