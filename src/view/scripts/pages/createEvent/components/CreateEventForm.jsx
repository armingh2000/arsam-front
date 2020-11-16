import React, {useState} from 'react';
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
  Upload } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import {useHistory} from 'react-router-dom';
import {sendCreateEventPost, sendImageEventPost} from "../../../../../core/create-event/createEvent"

const normFile = e => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const { Option } = Select;
const { RangePicker } = DatePicker;
const {TextArea} = Input;

const CreateEventForm = () =>{
  const [form] = Form.useForm();
  const [isProject, handleIsProject]=useState(false);
  const [limiedMember,handleLimitedMember]=useState(false);
  const [isPrivate,handleIsPrivate]=useState(false);

  const history = useHistory();

  const eventCategory=
  [
    <Option key={1}>Race</Option>,
    <Option key={2}>Performance</Option>,
    <Option key={4}>Conference</Option>,
    <Option key={8}>Fundraiser</Option>,
    <Option key={16}>Festival</Option>,
    <Option key={32}>Social Event</Option>
  ];



  const [failureMessage, setFailureMessage] = useState("");
  const [isFailed, setIsFailed] = useState(false);


  function onLimitChange(value){
    handleLimitedMember(value);
  }

  function onPrivateChange(value){
    handleIsPrivate(value);
  }

  function onTypeChange(value){
    switch (value) {
      case 'projectEvent':
        handleIsProject(true);
        break;
      case 'normalEvent':
        handleIsProject(false);
        break;
    }
  }

 var imgVal;
 var fileVal;
 var eventId;

  const onFinish = (values) => {
    const category=values.category;
    // console.log(`category: ${category}`);
    const token = localStorage.getItem("userToken");
    // console.log(`values: ${values}`);
    imgVal=values.dragger;
    // fileVal=values.files;
    // console.log(`dragger: ${values.dragger}`);
    // console.log("files:");
    // console.log(values.files);
    // console.log(values.description);

    sendCreateEventPost(
      {
        "Name": values.eventName,
        "Description": values.description,
        "StartDate": values.date[0],
        "EndDate": values.date[1],
        "IsPrivate": values.private,
        "IsLimitedMember": values.limit,
        "MaximumNumberOfMembers": values.memberNum,
        "IsProject": isProject,
        "Categories":category
      },
      {
        'Authorization':`Bearer ${token}`
      }
    )
       .then(onSuccess)
       .catch(onFailure);
  };

  const onSuccess = (response) => {


    const token=localStorage.getItem("userToken");
    // console.log("token:");
    // console.log(token);
    eventId = response.data.id;
    // console.log("event id:");
    // console.log(eventId);


    if(imgVal!==undefined){
      var FormData = require('form-data');
      var fs = require('fs');
      var data = new FormData();
      data.append('image',imgVal[0].originFileObj);
      // var data = new FormData(form.dragger);
      // console.log("form-data:");
      // console.log(data);

      // for(var pair of data.entries()) {
        // console.log(pair[1]);
      // }


      sendImageEventPost(
        `https://localhost:44373/api/event/AddImage?eventId=${eventId}`
          ,
          data
          ,
        {
          'Authorization':`Bearer ${token}`
        }
        )
        .then(onSuccess2)
        .catch(onFailure);
    }
    else {
      redirectUser(eventId);
    }

  };

  const onSuccess2 =(response) => {
    // console.log(response);
    if(response.status===200){
      redirectUser(eventId);
    }
  };

  function redirectUser(eventId){
    history.replace(`/event/${eventId}`);
  }

  const onFailure = (error) => {
    setIsFailed(true);
    setFailureMessage("Invalid Create Event Attempt!");
    console.log(error);
    // if (error.response.status === 401) {
    //   setFailureMessage("Email is not confirmed yet!");
    //   setIsFailed(true);
    // } else {
    //   setFailureMessage("Invalid Login Attempt!");
    //   setIsFailed(true);
    // }
  };

  return (
      <div className="box">
        <Form
        className="center-form"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 16 }}
          layout="horizontal"
          initialValues={{ size: 'default' }}
          size={'default'}
          onFinish={onFinish}
        >


            <span className="text-center">create event</span>


            <Form.Item  label="Event Name" name="eventName" rules={[{ required: true, message:'Please Enter Event Name' }]}>
              <Input className="get-border-radius"/>
            </Form.Item>


            <Form.Item label="Description" name="description" rules={[{ required: true, message:'Please Enter Description' }]}>
              <TextArea rows={2} className="get-border-radius get-shadow"/>
            </Form.Item>


            <Form.Item label="Image">
              <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                <Upload.Dragger name="files"
                className="get-shadow get-border-radius"
                // action="https://localhost:44373/api/event/AddImage"
                >
                <Row>
                  <Col span={6}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                  </Col>
                  <Col  className="resize-upload-dragger">
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                  </Col>
                </Row>
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>



            <Form.Item label="Date" name="date" rules={[{ required: true, message:'Please Enter Description' }]}>
              <RangePicker className="get-shadow get-border-radius date-picker-width" showTime/>
            </Form.Item>


            <Row>
              <Col span={11}>
                <Form.Item label="Limited Member" name="limit" labelCol={{ span: 11 }} wrapperCol={{ span: 11 }} >
                  <Switch  className="get-shadow" onChange={onLimitChange}/>
                </Form.Item>

                <Form.Item label="Member Num" name="memberNum" hidden={!limiedMember} labelCol={{ span: 11 }} wrapperCol={{ span: 10 }}>
                  <InputNumber min="1" defaultValue={1}/>
                </Form.Item>
              </Col>
              <Col span={9}>
                <Form.Item label="Private" name="private" labelCol={{ span: 7 }} wrapperCol={{ span: 10 }}>
                  <Switch  className="get-shadow" onChange={onPrivateChange}/>
                </Form.Item>
              </Col>
            </Row>


            <Row className="category-type-loaction">

              <Col span={10}>
                <Form.Item
                labelCol={4}
                wrapperCol={7}
                name="category" label="Category" rules={[{ required: true, message:'Please Choose one Option' }]}>
                  <Select
                    className="get-shadow"
                    mode="multiple"
                    style={{ width: "100%" }}
                    placeholder="Please select"
                    defaultValue={[]}
                  >
                  {eventCategory}
                  </Select>
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item name="eventType" label="Type" rules={[{ required: true, message:'Please Choose one Option' }]}>
                <Select
                  className="get-shadow"
                  placeholder="Select a option and change input text above"
                  onChange={onTypeChange}
                  allowClear
                >
                  <Option value="normalEvent">Normal Event</Option>
                  <Option value="projectEvent">Project Event</Option>
                </Select>
                </Form.Item>
              </Col>

            </Row>
            {
            // <Form.Item name="but" label="but" hidden={!IsProject} >
            //   <Button htmlType="submit"  style={{width: "100%"}}>
            //     but
            //   </Button>
            // </Form.Item>
            }

            <Form.Item >
              <Button htmlType="submit" className="btn center-button" style={{width: "100%"}}>

                <svg width="100%" height="100%">
                  <defs>
                    <linearGradient id="grad1">
                      <stop offset="0%" stop-color="#7183f5" />
                      <stop offset="100%" stop-color="#74ddfc" />
                    </linearGradient>
                  </defs>
                  <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="97%" height="85%"></rect>
                </svg>
                <span className="center-span">Create</span>

              </Button>
            </Form.Item>


        </Form>

      </div>


  );

}

export default CreateEventForm;
