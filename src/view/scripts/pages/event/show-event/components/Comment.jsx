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
      content: "1",
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




  return (
    <div>


      {/* {comments.length > 0 && <CommentList comments={comments} />} */}
      <div style={{height:'200px' ,overflowY:"scroll"}}>
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
