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



const CreateEventForm = () =>{

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
