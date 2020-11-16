import { Layout, Menu, Col, AutoComplete, Typography, Row } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import SubTask from './SubTask';
import MenuItem from 'antd/lib/menu/MenuItem';
import { selectSubTask } from '../../../../../core/event/actions/taskActions';
import {EyeInvisibleTwoTone} from '@ant-design/icons'


const {Header, Content, Sider} = Layout
const {Title} = Typography

const Tasks = (props) => {


    const chooseSubTask = (id) => {
        props.dispatch(selectSubTask(id))
    }
    return (

            <Layout
            className="get-border-radius"
            style={{
                // width: '95vh',
                marginLeft: '5%',
                marginTop : '5%',
            }}
            >
            <Sider theme="light"
            className="site-layout-background get-border-radius get-shadow menu-tasks-get-style">
            <Menu
            mode="inline"
            maxHeight={180}
            defaultSelectedKeys={['1']}
            onSelect={(e) => chooseSubTask(e.key)
            }
            >
            {console.log(props.event.tasks)}
                {props.event.tasks.map((task) => {
                    return <MenuItem task={task} key={task.id}>{task.name}
                    </MenuItem>
                })}
            </Menu>
            </Sider>
            <Content
            className="content-style"
            >
            {
            props.event.selectedTask ?  <SubTask key={props.event.selectedTask.id} {...props.event.selectedTask} 
            eventMembers={props.event.eventMembers} ></SubTask> :
                <div >
                    <Row className="Nothing-Shown">
                    <EyeInvisibleTwoTone  
                    twoToneColor="#4eaaba"
                    style={{
                        fontSize : '38px',
                    }}/>
                    </Row>
                    <Row className="Nothing-Shown">
                    <Title level={4} className="Nothing-Selected-Style">Nothing Selected!</Title>
                    </Row>
                </div>
            }
            </Content>
            </Layout>
    )
}



const mapStateToProps = (state) => {
    return {
        event:state.event.event,

    }
}

export default connect(mapStateToProps)(Tasks);