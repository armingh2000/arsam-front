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

const SubTask = ({dispatch, id, eventId, title, status, members, taskMembers}) =>{
  
    const [assignMode, setAssignMode] = useState(false)
    const [editMode, setEditMode] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title)
    const [styleButtonColor, setStyleButtonColor] = useState('#303afc')
    const [styleButtonIcon, setStyleButtonIcon] = useState(<FileAddOutlined style={{color:'white'}} />)
    const [hidePopover, setHidePopover] = useState(true)
    const [hideDropdown, setHideDropdown] = useState(false)

    const editChange = (e) => {
      const setIt = e.target.value;
      setEditedTitle(setIt)
    }
   
    const assignChange = (e) => {
      const setIt = e;
      if(!taskMembers.includes(setIt)){
        sendAssignMembersTaskPut({Id : id, MemberId : setIt})
            .then(dispatch(assignMember(id, setIt))).catch((e) => {console.log(e)})
      }
    }
    const editTaskSend = () => {
      setEditMode(false)
      sendEditTaskGet({Name : editedTitle, EventId : eventId, Order : 0, Status : status, Id :  id})
      .then(dispatch(editTask(id, editedTitle))).catch((e) => console.log(e))
    }


  const menuMembers = () => {
    return <Menu
          mode="inline"
          style={{ height: '100%', borderRight: 0 }}
          onClick={(e) => {assignChange(e.key)}}>
            {members.map((member) => {
              return <Menu.Item key={member}>{member}</Menu.Item>
            })}
        </Menu>
  }


  const statusButtonStyle = (type) => {
  
    if(type == 'todo'){
      setStyleButtonColor('#303afc')
      setStyleButtonIcon(<FileAddOutlined style={{color:'white'}}/>)
      sendEditTaskGet({Name : editedTitle, EventId : eventId, Order : 0, Status : 1, Id :  id})
      .then(dispatch(changeStatus({id, status : type})))
    } else if(type == 'Doing'){
      setStyleButtonColor('#fccc30')
      setStyleButtonIcon(<LoadingOutlined style={{color:'white'}}/>)
      sendEditTaskGet({Name : editedTitle, EventId : eventId, Order : 0, Status : 2, Id :  id})
      .then(dispatch(changeStatus({id, status : type})))
    } else{
      setStyleButtonColor('#21c22e')
      setStyleButtonIcon(<FileDoneOutlined  style={{color:'white'}}/>)
      sendEditTaskGet({Name : editedTitle, EventId : eventId, Order : 0, Status : 3, Id :  id})
      .then(dispatch(changeStatus({id, status : type})))
    }
  }

    return (<div>
              
     {!editMode &&  <Row>
      <Col span={2}>
        <Dropdown
        placement="topCenter"
        overlay={<div>
          <a onClick={(e) => {statusButtonStyle(e='todo')}}>To Do</a>
          <br/>
          <a onClick={(e) => {statusButtonStyle(e='Doing')}}>Doing</a>
          <br/>
          <a onClick={(e) => {statusButtonStyle(e='Done')}}>Done</a>
      </div>}
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
            icon={styleButtonIcon}
            style={{
              backgroundColor : styleButtonColor,
            }}></Button>
        </Popover>
        </Dropdown>
      </Col>
      <Col span={12}><Title class="Title" level={2}>{title} </Title></Col>
      <Col span={2} offset={6}><Button icon={<EditOutlined />} type="dashed" onClick={() => {setEditMode(!editMode)}}></Button></Col>
      <Button icon={<DeleteOutlined />} style={{backgroundColor:'red'}} type="ghost" onClick={() => sendDeleteTaskDelete(id).then(dispatch(removeSubTask({id}))).catch((e) => {console.log(e)})
    }></Button>
      </Row>
         }       
        {<div>  
          {editMode && 
            <Form {...layout}
            name="basic"
            onSubmitCapture={editTaskSend
            }>
            <Form.Item
            label="Title"
            name="Title"
        >
            <Input type='text'
            defaultValue={title}
            value={editedTitle}
            onChange={(e) => {editChange(e)}}/>
            
        </Form.Item>

        <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
            <CheckOutlined />
            </Button>
        </Form.Item>
            </Form>
          }</div>
        }
      
        <Title level={3} style={{marginTop : 10}}>Members</Title>
     
     <Row>
     {taskMembers && taskMembers.map((member) => {
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
     <Tag icon={<UserAddOutlined />} onClick={() => {setAssignMode(!assignMode)}}>{assignMode && 
      <Dropdown overlay={(<Menu
        onClick={(e) => {assignChange(e.key)}}>
          {members.map(member => 
             <Menu.Item key={member}>{member}</Menu.Item>
          )}
      </Menu>)}><a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Select a member 
    </a></Dropdown>
    }</Tag></Row>
  </div>)
                
    }
    
   
        

export default connect()(SubTask);
