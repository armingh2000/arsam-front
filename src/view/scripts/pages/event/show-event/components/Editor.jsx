import { Tooltip, Comment, Avatar, Form, Button, Input } from "antd";
import {SendOutlined} from '@ant-design/icons';
import moment from "moment";
import React, { useEffect, useState} from "react";
import { Spin, Typography, Row, Col } from "antd";
import ReplyModal from './ReplyModal';
import { addComment, getComments } from "../../../../../../core/api/actions/EventActions";
import CommentList from './CommentList'

const { TextArea } = Input;




const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div id="editor-components">
    <Form.Item>
      <TextArea className="get-border-radius" rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
        <SendOutlined />
      </Button>
    </Form.Item>
  </div>
);

export default Editor;
