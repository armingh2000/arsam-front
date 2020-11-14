import { Layout, Menu, Divider, AutoComplete } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import SubTask from './SubTask';
import MenuItem from 'antd/lib/menu/MenuItem';
import { selectSubTask } from '../../../../../core/event/actions/taskActions';


const {Header, Content, Sider} = Layout

const Tasks = (props) => {
 

    const chooseSubTask = (task) => {
        props.dispatch(selectSubTask(task))
    }
    return (
        <Layout style={{
            width: '60%',
            marginLeft : '21%',
            marginTop : '5%'
        }}>    
        <Sider theme="light" width={260} 
        className="site-layout-background" style={{
            overflow: 'auto',
            height: '50vh',
            maxHeight : 200
          }}>
        <Menu
          mode="inline"
          maxHeight={180}
          defaultSelectedKeys={['1']}
          onSelect={(e) => chooseSubTask(e.key)
        }
        >
              {props.tasks.map((task) => {
                  return <MenuItem task={task} key={task.id}>{task.title}
                  </MenuItem>
              })}
          </Menu>
          </Sider>
          <Content
          width={600}
          style={{
            backgroundColor : 'white',
            paddingLeft : 30,
            maxWidth : 630
          }}
        >
        {
           props.selectedTask ?  <SubTask key={props.selectedTask.id} {...props.selectedTask} ></SubTask> :
            <Divider>Nothing Selected!</Divider>
        }
        </Content>
        </Layout>
        
    )   
}



const mapStateToProps = (state) => {
    return {
        tasks : state.tasks,
        selectedTask : state.selectedTask
    }
}

export default connect(mapStateToProps)(Tasks);