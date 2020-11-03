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
  Switch } from 'antd';
import {useHistory} from 'react-router-dom';

const { Option } = Select;

const CreateEventForm = () =>{
  const [form] = Form.useForm();
  const [showTasks, handleShowTasks]=useState(false);

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

          <Form.Item label="Event Name" name="eventName">
            <Input />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input />
          </Form.Item>

          <Form.Item label="Event Date" name="date">
            <DatePicker />
          </Form.Item>

          <Form.Item label="InputNumber" name="number">
            <InputNumber />
          </Form.Item>

          <Form.Item label="Task CheckList" name="checklist">
            <Switch />
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
