import { Input, Form, Modal, Select, Upload, Image, Tag} from 'antd';
import React, {useEffect, useState} from 'react';
import { SoundOutlined, SafetyOutlined, TrophyOutlined, DollarCircleOutlined, FireOutlined, TeamOutlined  } from '@ant-design/icons';


const ReplyModal = (props) => {
  // const history = useHistory();

  const [commentText,setCommentText]=useState("");

    const OnchangeCommentText = (e) => {
        const val = e.target.value;
        setCommentText(val);
    }

    const handleOk = () => {
        // props.dispatch(updateProfile({
        //     FirstName: ((firstName!==null)?firstName:""),
        //     LastName: ((lastName!==null)?lastName:""),
        //     Description: ((description!==null)?description:""),
        //     fields: ((fields!=null)?fields:[])
        // }));

        props.handleOk();
      };

      const handleCancel = () => {
        props.handleCancel();
      };



    return(
        <div>
        <Modal
        title="Reply"
        visible={props.visible}
        onOk={handleOk}
        onCancel={handleCancel}>

        <Form
        >
            {
            // <Form.Item
            // label="text"
            // labelCol={4}
            // name="commentText"
            // >
            // <Input
            // value={commentText}
            // onChange={(e) => {OnchangeCommentText(e)}} ></Input>
            // </Form.Item>
            }

            <Form.Item
            label="comment text"
            name="commentText"
            labelCol={4}>


            <Input.TextArea
            value={commentText}
            onChange={(e) => {OnchangeCommentText(e)}}></Input.TextArea>
            </Form.Item>

          </Form>
        </Modal>

        </div>
    )
}



export default ReplyModal;
