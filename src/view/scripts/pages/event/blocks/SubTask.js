import React, { useState } from 'react'
import { connect } from 'react-redux'
import {tailLayout, layout} from './util'
import MenuItem from 'antd/lib/menu/MenuItem';
import { Form, Popover, Input, Button, Menu, Divider,  Typography, List, Dropdown, Tag, Row, Col } from 'antd';
import {changeStatus, editTask, removeSubTask, assignMember, removeTaskMember} from '../../../../../core/event/actions/taskActions'
import { sendEditTaskGet, sendDeleteTaskDelete, sendAssignMembersTaskPut, sendDeleteMemberDelete} from '../../../../../core/event/Tasks/api';
import styles from '../../../../styles/components/tasks.scss'
import {  UserAddOutlined, EditOutlined, DeleteOutlined, CheckOutlined,FileDoneOutlined,LoadingOutlined, FileAddOutlined } from '@ant-design/icons';

const { Title } = Typography;

const SubTask = ({dispatch, id, eventId, name, status, eventMembers, assignedMembers}) =>{
  
    const [assignMode, setAssignMode] = useState(false)
    const [editMode, setEditMode] = useState(false);
    const [editedTitle, setEditedTitle] = useState(name)
    const [styleButtonColor, setStyleButtonColor] = useState("Status-Button-Todo-Style")
    const [styleButtonIcon, setStyleButtonIcon] = useState(<FileAddOutlined style={{color:'white'}} />)
    const [hidePopover, setHidePopover] = useState(true)
    const [hideDropdown, setHideDropdown] = useState(false)

    const editChange = (e) => {
      const setIt = e.target.value;
      setEditedTitle(setIt)
    }
   
    const assignChange = (e) => {
      const setIt = e;
      if(!assignedMembers.includes(setIt)){
        sendAssignMembersTaskPut({Id : id, MemberId : setIt})
            .then(dispatch(assignMember(id, setIt))).catch((e) => {console.log(e)})
      }
    }
    const editTaskSend = () => {
      setEditMode(false)
      if(status == 'todo'){
        sendEditTaskGet({Name : editedTitle, EventId : eventId, Order : 0, Status : 1, Id :  id})
        .then(dispatch(editTask(id, editedTitle))).catch((e) => console.log(e))
      } else if(status == 'Doing'){
        sendEditTaskGet({Name : editedTitle, EventId : eventId, Order : 0, Status : 2, Id :  id})
        .then(dispatch(editTask(id, editedTitle))).catch((e) => console.log(e))
      } else{
        sendEditTaskGet({Name : editedTitle, EventId : eventId, Order : 0, Status : 3, Id :  id})
        .then(dispatch(editTask(id, editedTitle))).catch((e) => console.log(e))
      }
     
    }

  const statusButtonStyle = (type) => {
  
    if(type == 'todo'){
      setStyleButtonColor("Status-Button-Todo-Style")
      setStyleButtonIcon(<FileAddOutlined style={{color:'white'}}/>)
      sendEditTaskGet({Name : editedTitle, EventId : eventId, Order : 0, Status : 1, Id :  id})
      .then(dispatch(changeStatus({id, status : type})))
    } else if(type == 'Doing'){
      setStyleButtonColor("Status-Button-Doing-Style")
      setStyleButtonIcon(<LoadingOutlined style={{color:'white'}}/>)
      sendEditTaskGet({Name : editedTitle, EventId : eventId, Order : 0, Status : 2, Id :  id})
      .then(dispatch(changeStatus({id, status : type})))
    } else{
      setStyleButtonColor("Status-Button-Done-Style")
      setStyleButtonIcon(<FileDoneOutlined  style={{color:'white'}}/>)
      sendEditTaskGet({Name : editedTitle, EventId : eventId, Order : 0, Status : 3, Id :  id})
      .then(dispatch(changeStatus({id, status : type})))
    }
  }

    return (<div>
              
     {!editMode &&  
      <Row className="First-Row-Padding">
      <Col span={3}>
        <Dropdown
        placement="topCenter"
        overlay={
          <Menu>
           <Menu.Item><a  onClick={(e) => {
            statusButtonStyle(e='todo')
            setHideDropdown(false)}}>To Do</a></Menu.Item>
          <Menu.Item><a  onClick={(e) => {statusButtonStyle(e='Doing')
          setHideDropdown(false)}}>Doing</a></Menu.Item>
         <Menu.Item> <a  onClick={(e) => {statusButtonStyle(e='Done')
         setHideDropdown(false)}}>Done</a>  </Menu.Item>
      </Menu>}
      trigger={['click']}
      onVisibleChange={(e) =>{
        if(e) {
          setHidePopover(true)
          setHideDropdown(true)
        }
      }}
      visible={hideDropdown}
      >
        <Popover
        placement="top"
        content={
            status
        }
        title="Status"
        visible={!hidePopover}
        onMouseEnter={() => {
          setHidePopover(false)
          setHideDropdown(false)
        }}
        onMouseLeave={() => {setHidePopover(true)}}>
            <Button 
            size='large'
            className="Status-Button-Style get-shadow get-border-radius"
            icon={styleButtonIcon}
            className={styleButtonColor}></Button>
        </Popover>
        </Dropdown>
      </Col>
      <Col span={12}><Title class="Title" level={2}>{name} </Title></Col>
      <Col span={5} offset={4}>
      <Button icon={<EditOutlined />} className="get-shadow get-border-radius Delete-Edit-Button" type="dashed" onClick={() => {setEditMode(!editMode)}}></Button>
      <Button icon={<DeleteOutlined />} className="get-shadow get-border-radius Delete-Edit-Button"  type="ghost" onClick={() => sendDeleteTaskDelete(id).then(dispatch(removeSubTask({id}))).catch((e) => {console.log(e)})
    }></Button>
    </Col>
      </Row>
         }       
        {<div>  
          {editMode && 
            <Form
            name="basic"
            onSubmitCapture={editTaskSend
            }>
           <Row>
           <Col span={18} className="Tags-Row-Style">
           <Form.Item
           label="Title"
           name="Title"
       >
           <Input type='text'
           defaultValue={name}
           value={editedTitle}
           onChange={(e) => {editChange(e)}}/>
           
           </Form.Item>
           </Col>
           <Col>
           <Form.Item {...tailLayout}>
           <Button type="primary" htmlType="submit" className="Task-Button-Style">
           <CheckOutlined />
           </Button>
         </Form.Item>
         </Col>
           </Row>
            </Form>
          }</div>
        }
      
        <Title level={3} className="Members-Title-Style">Members</Title>
     
     <Row className="Tags-Row-Style">
     {assignedMembers && assignedMembers.map((member) => {
       return (<Tag key={member}
       closable
       onClose={() => {
         sendDeleteMemberDelete({Id : id, MemberId : member}).then(dispatch(removeTaskMember(member, id)))
       }}>
               {
                 member
               }
           </Tag>)
     })}  
     <Tag icon={<UserAddOutlined />} className="get-border-radius get-shadow" onClick={() => {setAssignMode(!assignMode)}}>{assignMode && 
      <Dropdown overlay={(<Menu
        onClick={(e) => {assignChange(e.key)}}>
        {console.log(eventMembers)}
          {eventMembers.map(member => 
             <Menu.Item key={member.email}>{member.email}</Menu.Item>
          )}
      </Menu>)}><a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Select a member 
    </a></Dropdown>
    }</Tag></Row>
  </div>)
                
    }
    
   
        

export default connect()(SubTask);
