import React, {useState} from 'react';
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
  const [showTasks, handleShowTasks]=useState(false);
  const [limiedMember,handleLimitedMember]=useState(false);

  const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
  };

  const onFinish = (values) => {
    console.log('Success:', values.date );
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const history = useHistory();

  function onLimitChange(value){
    switch (value) {
      case true:
        handleLimitedMember(true);
        break;
      case false:
        handleLimitedMember(false);
        break;
    }
  }

  function onTypeChange(value){
    switch (value) {
      case 'projectEvent':
        handleShowTasks(true);
        break;
      case 'normalEvent':
        handleShowTasks(false);
        break;
    }
  }

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

          <Form.Item label="Event Name" name="eventName" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Description" name="description" rules={[{ required: true }]}>
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

          <Form.Item label="Event Date" name="date">
            <RangePicker showTime />
          </Form.Item>


          <Form.Item label="Limited Member" name="limit" >
            <Switch  onChange={onLimitChange}/>
          </Form.Item>

          <Form.Item label="Event Member Num" name="memberNum" hidden={!limiedMember}>
            <InputNumber min="0"/>
          </Form.Item>



          <Form.Item name="taskChecklistSelector" label="Task CheckList" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option and change input text above"
            onChange={onTypeChange}
            allowClear
          >
            <Option value="normalEvent">Normal Event</Option>
            <Option value="projectEvent">Project Event</Option>
          </Select>
          </Form.Item>

          <Form.Item name="but" label="but" hidden={!showTasks} >
            <Button htmlType="submit"  style={{width: "100%"}}>
              but
            </Button>
          </Form.Item>

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
