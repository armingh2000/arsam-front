import React from 'react'
import Tasks from './blocks/Tasks'
import ReadtDOM from 'react-dom'
import TaskForm from './blocks/TaskForm'
import { OmitProps } from 'antd/lib/transfer/ListBody'
import { addTask, changeStatus } from '../../../../../../core/event/actions/taskActions'
import { connect } from 'react-redux'
import store from '../../../../core/store'
import '../../../styles/components/tasks.scss'


const ShowEvent = (props) => {
    store.subscribe(() => console.log(store.getState()));
    return (
        <div>
            <div>
                <Tasks></Tasks>
                <TaskForm  
                onSubmit={(task) => {props.dispatch(addTask(task))}} 
                onStatusChange={(task) => {props.dispatch(changeStatus(task.id, task))}}></TaskForm>
            </div>
        </div>
    )
}

export default connect()(ShowEvent); 