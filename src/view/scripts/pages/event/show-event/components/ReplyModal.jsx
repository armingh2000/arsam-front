import { Input, Form, Modal, Select, Upload, Image, Tag} from 'antd';
import React, {useEffect, useState} from 'react';
import { SoundOutlined, SafetyOutlined, TrophyOutlined, DollarCircleOutlined, FireOutlined, TeamOutlined  } from '@ant-design/icons';
import { addComment, getComments } from "../../../../../../core/api/actions/EventActions";


const ReplyModal = (props) => {
  // const history = useHistory();

  const [commentText,setCommentText]=useState("");

  useEffect(()=>{
    setCommentText("");
  },[]);

    const OnchangeCommentText = (e) => {
        const val = e.target.value;
        setCommentText(val);
    }

    const handleOk = () => {
      console.log("parent",props.parent);
      console.log("text:",commentText);

        props.dispatch(
          addComment
          (
            {
              payload:{
                tokenId: localStorage.getItem("userToken"),
                data:
                {
                EventId: props.eventId,
                Description: commentText,
                ParentId: props.parent.id
                }
              }
            }
          )
        );

        setCommentText("");

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
            name="commentTextItem"
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
