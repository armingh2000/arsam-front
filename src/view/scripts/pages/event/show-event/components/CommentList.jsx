import { Tooltip, Comment, Avatar, Form, Button, Input } from "antd";
import moment from "moment";
import React, { useEffect, useState} from "react";
import { Spin, Typography, Row, Col } from "antd";
import ReplyModal from './ReplyModal';
import { addComment, getComments } from "../../../../../../core/api/actions/EventActions";
import {useHistory} from 'react-router-dom';


const CommentList = ({ comments, dispatch, eventId }) => {
  const history = useHistory();

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
    // for(var i = 0; i<email.length; i++ ){
    //   color += letters[(email.charCodeAt(i) * i + 14) % 16];
    // }
    // for(var i=email.length; i<6; i++){
    //   color += letters[(email.charCodeAt(i) * i + 14) % 16];
    // }
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
  <ReplyModal
  visible={isVisibleReplyModal}
  handleOk={handleOk}
  handleCancel={handleCancel}
  parent={repliedComment}
  dispatch={dispatch}
  eventId={eventId}
  />

  {comments&&comments.map((item)=>{
    return(
    <Comment
    actions={[<span key="comment-nested-reply-to" onClick={()=>handleOnClick(item)}>Reply to</span>]}
    author={<a onClick={()=>handleOnClickAuthor(item.user.email)}>{item.user.email}</a>}
    avatar={
      <Tooltip title={`${item.user.firstName.charAt(0).toUpperCase()+item.user.firstName.slice(1)} ${item.user.lastName.charAt(0).toUpperCase()+item.user.lastName.slice(1)}`} placement="top">
          <Avatar
          style={{
              backgroundColor:getRandomColor(item.user.email),
              }}
          onClick={()=>handleOnClickAuthor(item.user.email)}
          >
            {item.user.firstName.charAt(0).toUpperCase()+item.user.lastName.charAt(0).toUpperCase()}
          </Avatar>
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
  })}
  </div>
);

}

export default CommentList;
