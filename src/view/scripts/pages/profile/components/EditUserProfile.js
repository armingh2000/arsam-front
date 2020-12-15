import React, {createRef, useEffect, useState} from 'react'
import { connect } from 'react-redux';
import { Input, Form, Modal, Select, Upload, Image, Tag} from 'antd';
import ImgCrop from 'antd-img-crop';
import { SoundOutlined, SafetyOutlined, TrophyOutlined, DollarCircleOutlined, FireOutlined, TeamOutlined  } from '@ant-design/icons';
import { updateImage, updateProfile } from '../../../../../core/api/actions/UserProfileActions';


  
const EditProfile = (props) => {
    const { Option } = Select;

    const eventCategory=
    [
      <Option value={1}>Race</Option>,
      <Option value={2}>Performance</Option>,
      <Option value={4}>Conference</Option>,
      <Option value={8}>Fundraiser</Option>,
      <Option value={16}>Festival</Option>,
      <Option value={32}>Social Event</Option>
    ];

    
    const [firstName, setFirstName] = useState(props.user.firstName);
    const [lastName, setLastName] = useState(props.user.lastName);
    const [description, setDescription] = useState(props.user.description);
    const [fields, setFields] = useState(props.user.fields);
    
    
    const [imageChanged, setImageChanged] = useState(false)

    //Set image
    const [fileList, setFileList] = useState([]);

    const onChangeImage = ({ fileList: newFileList }) => {
      setFileList(newFileList);
      setImageChanged(true)
    };

    const onPreview = async file => {
      let src = file.url;
      if (!src) {
        src = await new Promise(resolve => {
          const reader = new FileReader();
          reader.readAsDataURL(file.originFileObj);
          reader.onload = () => resolve(reader.result);
        });
      }
      const image = new Image();
      image.src = src;
      const imgWindow = window.open(src);
      imgWindow.document.write(image.outerHTML);
    };
   

    const OnchangeFirstName = (e) => {
        const name = e.target.value;
        setFirstName(name)
    }
    const OnchangeLastName = (e) => {
        const name = e.target.value;
        setLastName(name)
    }

    const OnchangeDescription = (e) => {
        const name = e.target.value;
        setDescription(name)
    }

    const onChangeCategories = (e) => {
        const categories = e;
        setFields(categories);
    }
    const handleOk = () => {
      console.log('fields:',fields)
      if(imageChanged && fileList.length != 0 ){
        var FormData = require('form-data');
        var fs = require('fs');
        var data = new FormData();

        data.append('ProfileImage',fileList[0].originFileObj);
        props.dispatch(updateImage(data))
      }
        props.dispatch(updateProfile({
            FirstName: firstName,
            LastName: lastName,
            Description: description,
            fields: fields
        }));
        props.handleOk();
      };
    
      const handleCancel = () => {
        props.handleCancel();
      };

      
     
 
    
    return(
        <div><Modal 
        title="Edit profile"
        visible={props.visible}
        onOk={handleOk}
        onCancel={handleCancel}>

        <Form 
        initialValues={{
          firstName:firstName,
          lastName:lastName,
          description:description,
          fields:fields
        }}
        >
            <Form.Item
           >
           <ImgCrop rotate>
            <Upload
            multiple={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onChange={onChangeImage}
              onPreview={onPreview}
            >
              {fileList.length < 1 && '+ Upload'}
            </Upload>
          </ImgCrop>
            
            </Form.Item>
            <Form.Item
            label="First Name"
            labelCol={4}
            name="firstName"
            >
            <Input
            value={firstName}
            onChange={(e) => {OnchangeFirstName(e)}} ></Input>
            </Form.Item>
            <Form.Item
            label="Last Name"
            name="lastName"
            labelCol={4}>
            <Input 
            value={lastName}
            onChange={(e) => {OnchangeLastName(e)}}
            ></Input>
            </Form.Item>
            <Form.Item 
            name="description"
            label="Description"
            labelCol={4}>
            <Input.TextArea 
            value={description}
            onChange={(e) => {OnchangeDescription(e)}}></Input.TextArea>
            </Form.Item>
            <Form.Item
            label="Fields"
            name="fields"
            labelCol={4}>
            <Select
            // value={fields}
            title="Fields"
            mode="multiple"
            placeholder="Please select"
            onChange={(e) => {onChangeCategories(e)}}
            >{eventCategory}</Select>
            </Form.Item>
      </Form>
        </Modal>
        
        </div>
    )
}



export default connect()(EditProfile)