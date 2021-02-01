import { Tooltip, Comment, Avatar, Form, Button, Input, Image, Empty  } from "antd";
import moment from "moment";
import React, { useEffect, useState} from "react";
import { Spin, Typography, Row, Col } from "antd";
import ReplyModal from './ReplyModal';
import { addComment, getComments } from "../../../../../../core/api/actions/EventActions";
import {useHistory} from 'react-router-dom';


const CommentList = ({ comments, dispatch, eventId, addCommentStatus, addReplyStatus, getCommentStatus }) => {
  const history = useHistory();
  const userToken= localStorage.getItem("userToken");

  const {Text} = Typography;


  const [isVisibleReplyModal,setIsVisibleReplyModal]=useState(false);
  const [repliedComment,setRepliedComment]=useState();

  function handleOnClick(item){
  console.log(item);
  setRepliedComment(item);
  setIsVisibleReplyModal(true);
}

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

  const handleOk = () =>{
    setIsVisibleReplyModal(false);
  }

  const handleCancel = () =>{
    setIsVisibleReplyModal(false);
  }

  function handleOnClickAuthor(author){
    history.replace(`/profile/${author}`);
  }


      return(<div>
        {
        <ReplyModal
        visible={isVisibleReplyModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        parent={repliedComment}
        dispatch={dispatch}
        eventId={eventId}
        />
        }

        {
          comments&&
          (
          comments.length>0?
          comments.map((item)=>{
          return(
          <Comment
          actions=
          {
            (userToken!==undefined && userToken!=="" && userToken!==null)?
            [
              <span
              key="comment-nested-reply-to"
              onClick={()=>handleOnClick(item)}>
              Reply to
              </span>
            ]
            :
            <div></div>
          }
          author={<a onClick={()=>handleOnClickAuthor(item.user.email)}>{`${item.user.firstName.charAt(0).toUpperCase()+item.user.firstName.slice(1)} ${item.user.lastName.charAt(0).toUpperCase()+item.user.lastName.slice(1)}`}</a>}
          avatar={
            <Tooltip title={item.user.email} placement="top">
                {
                  !(item.user.image===null || item.user.image===undefined || item.user.image==="")?
                  <Avatar
                  src={<div id="img-avatar-div"><Image src={item.user.image} height={45} width={45} /></div>}
                  size={40}
                  onClick={()=>handleOnClickAuthor(item.user.userId)}
                  >
                  </Avatar>
                  :
                  <Avatar
                  style={{
                      backgroundColor:getRandomColor(item.user.email),
                      }}
                  onClick={()=>handleOnClickAuthor(item.user.userId)}
                  >
                    {item.user.firstName.charAt(0).toUpperCase()+item.user.lastName.charAt(0).toUpperCase()}
                  </Avatar>
                }
            </Tooltip>
          }
          content={
            <p>
              {item.description}
            </p>
          }
          datetime={
              <Tooltip title={new Date(item.dateTime).toDateString()}>
                <span>{new Date(item.dateTime).toDateString()+" "+new Date(item.dateTime).getHours()+":"+new Date(item.dateTime).getMinutes()}</span>
              </Tooltip>
          }
        >
          {/*console.log("item",item)*/}
          {item.childs!==undefined&&<CommentList comments={item.childs} dispatch={dispatch} eventId={eventId}/>}
        </Comment>
          );
        })
          :
          <div id="no-comment">
            <Row justify="center" align="middle" style={{minHeight:"300px"}}>
              <Col>
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span className="non-selectable">No Comment Yet!!!</span>}/>
                {/*<Text type="danger">no comment yet!!!</Text>*/}
              </Col>
            </Row>
          </div>
        )
        }
        </div>
      );



}

export default CommentList;
