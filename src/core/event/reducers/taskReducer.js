// Task reducer 

import { act } from "react-dom/test-utils";
import { assignMember } from "../actions/taskActions";

const defaultState = {
    tasks : [],
    selectedTask : undefined
}

export default (state = defaultState, action) => {
    switch(action.type){
        case 'ADD_TASK':
            return {
                tasks : [...state.tasks, action.task],
                selectedTask : state.selectedTask
            }
            ;
        case 'REMOVE_TASK':
            return {
                tasks : state.tasks.filter(({id}) => id !== action.id),
                selectedTask : undefined
            }
        case 'EDIT_TASK':
            return {
                tasks : state.tasks.map((task) => {
                    if(task.id === action.id){
                        return {
                            ...task, 
                            title : action.title
                        }
                    } else {
                        return {
                            ...task
                        }
                    }
                }),
                selectedTask : {
                    ...state.selectedTask,
                    title : action.title
                }
            }
        case 'CHANGE_STATUS':
            return {
                tasks : state.tasks.map((task) => {
                    if(task.id === action.id){
                        return {
                            ...task, 
                            status : action.status
                        }
                    } else {
                        return {
                            ...task
                        }
                    }
                }),
                selectedTask : {
                    ...state.selectedTask,
                    status : action.status
                }
            }
        case 'ASSIGN_MEMBER':
            return {
                tasks : state.tasks.map((task) => {
                    if(task.id === action.id){
                        return {
                            ...task,
                            taskMembers : [...task.taskMembers, action.memberId]
                        }
                    } else {
                        return {
                            ...task
                        }
                    }
                }),
                selectedTask : {
                    ...state.selectedTask,
                    taskMembers : [ ...state.tasks.find((task) => {
                        return task.id == action.id}).taskMembers, action.memberId]
                }
            }
        case 'SELECT_SUBTASK':
            return{
                tasks : state.tasks,
                selectedTask : state.tasks.find((task) => {
                    return task.id == action.id})
            }
        case 'REMOVE_TASK_MEMBER':
            return{
                tasks : state.tasks.map((task) => {
                    if(task.id == action.id){
                        return{
                            ...task,
                            taskMembers : task.taskMembers.filter((memberId) => memberId !== action.memberId)
                        }
                    }else{
                        return{ ...task}
                    }
                }),
                selectedTask : {
                    ...state.selectedTask,
                    taskMembers : state.selectedTask.taskMembers.filter((memberId) => memberId !== action.memberId)
                }
            }
        default :
            return state;
    }
}