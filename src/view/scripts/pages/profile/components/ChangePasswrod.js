import React, {useState} from 'react'
import { connect } from 'react-redux';
import { Input, Form, Modal, Select, Upload, message} from 'antd';
import { updatePassword } from '../../../../../core/api/actions/UserProfileActions';


const ChangePassword = (props) => {

  const [form] = Form.useForm();

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [repeat, setRepeat] = useState('')

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
      form.resetFields();
      
      props.handleOk();
      message.success('Your password has been changed successfully');
      setOldPassword('')
      setNewPassword('')
      setRepeat('')
      
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
        form={form}>
            <Form.Item
            name="Old password"
            rules={[{ required: true, message: 'Please input your old password!' }, 
            
          ]}
            label="Old password">
                <Input.Password
                value={oldPassword}
                onChange={(e) => {onChangeOld(e)}}>
                </Input.Password>
            </Form.Item>
            <Form.Item name="password" label="Password" rules={[
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
      
            <Form.Item name="confirm" label="Confirm Password" dependencies={['password']} hasFeedback="hasFeedback" rules={[
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
        </Form>
        </Modal>
        </div>
    )
}

export default connect()(ChangePassword);
