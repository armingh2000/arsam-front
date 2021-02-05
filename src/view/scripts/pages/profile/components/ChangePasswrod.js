import React, {useState} from 'react'
import { connect } from 'react-redux';
import { Input, Form, Modal, message, Button, Row, Typography} from 'antd';
import {useHistory} from 'react-router-dom';
import { updatePassword } from '../../../../../core/api/actions/UserProfileActions';


const { Title } = Typography;
const ChangePassword = (props) => {

  const [form] = Form.useForm();
  const history = useHistory();

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [repeat, setRepeat] = useState('')
    const [button, setButton] = useState(props.changePasswordSuccess)

    const onChangeOld = (e) => {
        const pass = e.target.value;
        setOldPassword(pass);
    }

    const onChangeNew = (e) => {
        const pass = e.target.value;
        setNewPassword(pass);
    }
    
    const onChangeRepeat = (e) => {
        const pass = e.target.value;
        setRepeat(pass);
    }
    const handleCancel = () => {
        setOldPassword('')
        setNewPassword('')
      form.resetFields();
      setRepeat('')
        props.handleCancel();
      };

    const handleOk = () => {
      form.validateFields().then(
        () => {
          props.dispatch(updatePassword({OldPass: oldPassword, NewPass: newPassword}, handleSuccess, handleFail))
        }
      ).catch()
  
    }

    const handleSuccess = () => {
      //Password has changed and no error has occured
      localStorage.clear();
      setButton(true);
      message.success('Your password has been changed successfully');
      message.warning('Please login again');
    }

    const handleFail = (data) => {
        message.error(`${data}`);
    }
    
    return (
        <div>
        <Modal
        title="Change password"
        visible={props.visible}
        onOk={handleOk}
        onCancel={handleCancel}>
        <Form id="PassForm"
        layout="vertical"
        form={form}>
            <Form.Item hidden={button}
            name="Old password"
            rules={[{ required: true, message: 'Please input your old password!' }, 
            
          ]}
            label="Old password">
                <Input.Password
                value={oldPassword}
                onChange={(e) => {onChangeOld(e)}}>
                </Input.Password>
            </Form.Item>
            <Form.Item 
            hidden={button}
            name="password" label="Password" rules={[
                {
                  required: true,
                  message: 'Please input your password!'
                }, {
                  min: 3,
                  message: 'Password must be at least in length of 3!'
                },
               
              ]} hasFeedback="hasFeedback">
              <Input.Password 
              value={newPassword}
              onChange={(e) => {onChangeNew(e)}}/>
            </Form.Item>
      
            <Form.Item 
            hidden={button}
            name="confirm" label="Confirm Password" dependencies={['password']} hasFeedback="hasFeedback" rules={[
                {
                  required: true,
                  message: 'Please confirm your password!'
                },
                ({getFieldValue}) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('The two passwords that you entered do not match!');
                  }
                })
              ]}>
              <Input.Password 
              
              value={repeat}
              onChange={(e) => {onChangeRepeat(e)}}/>
             </Form.Item>
             <Row 
             hidden={!button}
             justify='center'
             align='middle'>
             <Form.Item 
             >
              <Button 
              onClick={() => {history.replace("/login");}}>
                Login again
              </Button>
             </Form.Item>
             </Row>
             <Row hidden={!button} justify='center' align='middle' >
             <Title level={5} type="warning">Please login again with your new password</Title>
             </Row>
        </Form>
        </Modal>
        </div>
    )
}

export default connect()(ChangePassword);
