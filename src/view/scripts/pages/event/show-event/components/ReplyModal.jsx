import { Input, Form, Modal, Select, Upload, Image, Tag, Tooltip, Comment, Avatar, Typography} from 'antd';
import React, {useEffect, useState} from 'react';
import { SoundOutlined, SafetyOutlined, TrophyOutlined, DollarCircleOutlined, FireOutlined, TeamOutlined  } from '@ant-design/icons';
import { addComment, getComments } from "../../../../../../core/api/actions/EventActions";
import {useHistory} from 'react-router-dom';

const ReplyModal = (props) => {
  // const history = useHistory();

  const [commentText,setCommentText]=useState("");
  const [isFailed, setIsFailed]=useState(false);
  const history = useHistory();
  const {TextArea} = Input;
  const {Text} = Typography;


  useEffect(()=>{
    setCommentText("");
  },[]);

    const OnchangeCommentText = (e) => {
        const val = e.target.value;
        setCommentText(val);
    }

    const handleOk = () => {
      // console.log("parent",props.parent);
      // console.log("text:",commentText);

        if(commentText.length>0){
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
      }
        else{
          setIsFailed(true);
        }
      };

      const handleCancel = () => {
        props.handleCancel();
      };

    function getRandomColor(email) {
      var letters = '0123456789ABCDEF';
      var color = '#';

      if(email.length<6){
        for(var i = 0; i<6; i++ ){
          color += letters[(email.charCodeAt(i%email.length)) % 16];
        }
      }
      else {
        for (var i = 0; i < 6; i++) {
          color += letters[(email.charCodeAt(i)) % 16];
        }
      }

      return color;
    }

    function handleOnClickAuthor(author){
      history.replace(`/profile/${author}`);
    }





    return(
        <div>
        <Modal
        title="Reply"
        visible={props.visible}
        onOk={handleOk}
        onCancel={handleCancel}
        >


        <Form>

        <Form.Item hidden={!isFailed}>
          <Text type="danger">Please Write Your Comment.</Text>
        </Form.Item>


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


              {
                props.parent
                &&




                <Comment
                author={<a onClick={()=>handleOnClickAuthor(props.parent.user.email)}>{props.parent.user.email}</a>}
                avatar={
                  <Tooltip title={`${props.parent.user.firstName.charAt(0).toUpperCase()+props.parent.user.firstName.slice(1)} ${props.parent.user.lastName.charAt(0).toUpperCase()+props.parent.user.lastName.slice(1)}`} placement="top">
                      <Avatar
                      style={{
                          backgroundColor:getRandomColor(props.parent.user.email),
                          }}
                      onClick={()=>handleOnClickAuthor(props.parent.user.email)}
                      >
                        {props.parent.user.firstName.charAt(0).toUpperCase()+props.parent.user.lastName.charAt(0).toUpperCase()}
                      </Avatar>
                  </Tooltip>
                }
                content={
                  <p>
                    {props.parent.description}
                  </p>
                }
                datetime={
                    <Tooltip title={new Date(props.parent.dateTime).toDateString()}>
                      <span>{new Date(props.parent.dateTime).toDateString()+" "+new Date(props.parent.dateTime).getHours()+":"+new Date(props.parent.dateTime).getMinutes()}</span>
                    </Tooltip>
                }
              >
                {/*console.log("item",item)*/}

              </Comment>

              }

              {

                                  // <p>
                                  //   Replied Comment:
                                  // <div>
                                  //     {props.parent.description}
                                  //   </div>
                                  // </p>
              }

            <Form.Item
            label="Comment Text"
            name="commentTextItem"
            labelCol={4}
            >

            <div id="reply-components">

              <TextArea
              className="get-border-radius"
              value={commentText}
              onChange={(e) => {OnchangeCommentText(e)}}
              />
            </div>
            </Form.Item>


          </Form>
        </Modal>

        </div>
    )
}



export default ReplyModal;
