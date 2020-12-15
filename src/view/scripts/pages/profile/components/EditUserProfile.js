import React, {useState} from 'react'
import { connect } from 'react-redux';
import { Input, Form, Col, Tag, Avatar, Image, Statistic, Button, Spin, Typography, } from 'antd';
import { updateProfile } from '../../../../../core/api/actions/UserProfileActions';

const EditProfile = (props) => {
    const [firstName, setFirstName] = useState(props.user.firstName);
    const [lastName, setLastName] = useState(props.user.lastName);
    const [description, setDescription] = useState(props.user.description);
    const [fields, setFields] = useState(props.user.fields);
    const onFinish = (values) => {
        props.dispatch(updateProfile());
    }
    return(
        <div>
        <Form onFinish={(values) => {onFinish(values)}} >
            <Form.Item defaultValue={firstName}
            label="First Name">
            <Input />
            </Form.Item>
            <Form.Item defaultValue={lastName}
            label="Last Name">
            <Input />
            </Form.Item>
            <Form.Item defaultValue={description}
            label="Description">
            <Input.TextArea />
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
      </Form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        user: state.profile.user,
        status: state.status
    }
  }

export default connect(mapStateToProps)(EditProfile)