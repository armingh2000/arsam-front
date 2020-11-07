import React, {useState} from 'react';
import axios from "axios";
import {Form,
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
import {sendCreateEventPost} from "../../../../../core/create-event/createEvent"

const normFile = e => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const { Option } = Select;
const { RangePicker } = DatePicker;
const CreateEventForm = () =>{
  const [form] = Form.useForm();
  const [isProject, handleIsProject]=useState(false);
  const [limiedMember,handleLimitedMember]=useState(false);
  const [isPrivate,handleIsPrivate]=useState(false);
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
  };

  const history = useHistory();


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

  const onFinish = (values) => {
    // console.log('Success:', values);
    // console.log(values.eventName,values.description,values.date[0], values.date[1], values.private, values.limit, values.memberNum, isProject, values.dragger);

    // const startdate=values.date[0];
    // const enddate=values.date[1];
    // console.log(startdate,enddate);

    const token = localStorage.getItem("userToken");
    console.log(token);

    sendCreateEventPost(
      {
        "Name": values.eventName,
        "Description": values.description,
        "StartDate": values.date[0],
        "EndDate": values.date[1],
        "IsPrivate": values.private,
        "IsLimitedMember": values.limit,
        "MaximumNumberOfMembers": values.memberNum,
        "IsProject": isProject
      },
      {
        'Authorization':'Bearer ${token}'
      }
    );

      // .then(onSuccess)
      // .catch(onFailure);
  };

  // const onFinishFailed = errorInfo => {
  //   console.log('Failed:', errorInfo);
  // };

  const onSuccess = ({data}) => {
    console.log("Success");


    // sendImageEventPost(
    //   {
    //
    //   });
    //localStorage.setItem("userToken", data.token);
    //history.replace("/account");
  };

  const onFailure = (error) => {
    setIsFailed(true);
    setFailureMessage("Invalid Create Event Attempt!");
    // if (error.response.status === 401) {
    //   setFailureMessage("Email is not confirmed yet!");
    //   setIsFailed(true);
    // } else {
    //   setFailureMessage("Invalid Login Attempt!");
    //   setIsFailed(true);
    // }
  };

  return (
      <div>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          initialValues={{ size: componentSize }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
          onFinish={onFinish}
        >

          <Form.Item label="Form Size" name="size">
            <Radio.Group>
              <Radio.Button value="small">Small</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="large">Large</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="Event Name" name="eventName" rules={[{ required: true, message:'Please Enter Event Name' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Description" name="description" rules={[{ required: true, message:'Please Enter Description' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Event Image">
            <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>

          <Form.Item label="Event Date" name="date" rules={[{ required: true, message:'Please Enter Description' }]}>
            <RangePicker showTime />
          </Form.Item>

          <Form.Item label="Private Event" name="private" >
            <Switch  onChange={onPrivateChange}/>
          </Form.Item>

          <Form.Item label="Limited Member" name="limit" >
            <Switch  onChange={onLimitChange}/>
          </Form.Item>

          <Form.Item label="Event Member Num" name="memberNum" hidden={!limiedMember}>
            <InputNumber min="1" defaultValue={1}/>
          </Form.Item>



          <Form.Item name="eventType" label="Event Type" rules={[{ required: true, message:'Please Choose one Option' }]}>
          <Select
            placeholder="Select a option and change input text above"
            onChange={onTypeChange}
            allowClear
          >
            <Option value="normalEvent">Normal Event</Option>
            <Option value="projectEvent">Project Event</Option>
          </Select>
          </Form.Item>

          {
          // <Form.Item name="but" label="but" hidden={!IsProject} >
          //   <Button htmlType="submit"  style={{width: "100%"}}>
          //     but
          //   </Button>
          // </Form.Item>
          }

          <Form.Item label="Create">
            <Button htmlType="submit" style={{width: "100%"}}>
              Create
            </Button>
          </Form.Item>

        </Form>

      </div>
  );

}

export default CreateEventForm;
