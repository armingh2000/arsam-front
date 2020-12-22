import { Tooltip, Comment, Avatar, Form, Button, Input } from "antd";
import moment from "moment";
import React, { useEffect, useState} from "react";
import { Spin, Typography, Row, Col } from "antd";
import ReplyModal from './ReplyModal';
const { TextArea } = Input;

const CommentList = ({ comments }) => {

  const [isVisibleReplyModal,setIsVisibleReplyModal]=useState(false);
  const [repliedComment,setRepliedComment]=useState();

  function handleOnClick(item){
  console.log(item);
  setRepliedComment(item);
  setIsVisibleReplyModal(true);
}

  function getRandomColor(firstLetter) {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[(firstLetter.charCodeAt(0) * i + 14) % 16];
  }
  return color;
}

  const handleOk = () =>{
    setIsVisibleReplyModal(true);
  }

  const handleCancel = () =>{
    setIsVisibleReplyModal(false);
  }


return(
  <div>

  <ReplyModal
  visible={isVisibleReplyModal}
  handleOk={handleOk}
  handleCancel={handleCancel}
  comment={repliedComment}
  />

  {comments.map((item)=>{
    return(
    <Comment
    actions={[<span key="comment-nested-reply-to" onClick={()=>handleOnClick(item)}>Reply to</span>]}
    author={<a>{item.author}</a>}
    avatar={
      <Tooltip title={item.author} placement="top">
                <Avatar
                  style={{
                    backgroundColor:getRandomColor(item.author.charAt(0)),
                  }}
                >
                  {item.author.charAt(0)}
                </Avatar>
              </Tooltip>
    }
    content={
      <p>
        {item.content}
      </p>
    }
  >
    {/* {children} */}
    {item.children!==undefined&&<CommentList comments={item.children}/>}
  </Comment>
    );
  })}
  </div>
);

}

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </div>
);

const Comments = () => {
  const [data, setData] = useState([
    {
      author: 'ali',
      content:
          "happy"
      ,
    },
    {
      author: 'sohrab',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content:"sad"
      ,
      datetime: (
        <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().subtract(2, 'days').fromNow()}</span>
        </Tooltip>
      ),
    },
    {
      author: 'mark',
      content: "parent",
      children:[
      {
        author:'armin',
        content:"good mood"
      }
      ,
      {
        author:'mmm',
        content:"bad mood",
        children:[
          {
            author:"rep",
            content:"reply to bad mood"
          }
        ]
      }
      ]
    }

  ]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value) {
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setValue("");
      setData([
        ...data,
        {
          author: "me",
          content:value,
          datetime: moment().fromNow(),
        }
      ]);
    }, 1000);
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
  };


  function handleScroll(e){
    setScroll(e.target.scrollTop);
    if(props.shouldSendSearchRequest && scroll % 270 > 200){
      setScroll(0);
      // window.FP.state.pageNumber++;
      // props.dispatch(sendFilterRequest(window.FP.getBody()));
      // props.filter.PageNumber++;
      console.log("props.filter1:(SearchEventForm.jsx)");
      console.log(props.filter);
      props.dispatch(addFilterPageNumber());
      props.dispatch(sendFilterRequest(getBody(props.filter),true,false));
      console.log("props.filter2:(SearchEventForm.jsx)");
      console.log(getBody(props.filter));
    }
  }



  return (
    <div>


      {/* {comments.length > 0 && <CommentList comments={comments} />} */}
      <div style={{height:'200px' ,overflowY:"scroll"}} onScroll={handleScroll}>
      <CommentList comments={data} />
      </div>

      <Comment
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={value}
          />
        }
      />
    </div>
  );
};
export default Comments;
