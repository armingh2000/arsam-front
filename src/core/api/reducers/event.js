import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
  event: {
    name: '',
     id: null,
     isProject: null,
     description: '',
     location: '',
     isPrivate: null,
     startDate: '',
     endDate: '',
     isLimitedMember: null,
     maximumNumberOfMembers: null,
     eventMembers: [],
     imagesPath: [],
     creator: {
       email: '',
       phoneNumber: null
     },
     categories: [],
     tasks : [],
     selectedTask : undefined
  }
};

export default ( state = initialState, {type, payload }) => {
  switch (type) {
    case ActionTypes.GET_EVENT_REQUEST:
      return state;

    case ActionTypes.GET_EVENT_REQUEST_SUCCESS:
      console.log(payload)
      return {
        ...state,
        event: payload.data
      }

    case ActionTypes.GET_EVENT_REQUEST_FAILURE:
      return state;

    case 'ADD_TASK':
            return {
                event: {
                  ...state.event,
                tasks : [...state.event.tasks, payload.task = {
                  ...payload.task,
                  members : state.event.eventMembers
                }],
              }
            }
    case 'REMOVE_TASK':
      console.log(payload.id)
            return {
                event:{
                  ...state.event,
                  tasks : state.event.tasks.filter(({id}) => id !== payload.id),
                  selectedTask : undefined
                }
            }
    case 'EDIT_TASK':
            return {
                event:{
                  ...state.event,
                  tasks : state.event.tasks.map((task) => {
                    if(task.id === payload.id){
                        return {
                            ...task, 
                            title : payload.title
                        }
                    } else {
                        return {
                            ...task
                        }
                    }
                }),
                selectedTask : {
                    ...state.event.selectedTask,
                    title : payload.title
                }
                }
            }        
    case 'CHANGE_STATUS':
            return {
                event:{
                  ...state.event,
                  tasks : state.event.tasks.map((task) => {
                    if(task.id === payload.id){
                        return {
                            ...task, 
                            status : payload.status
                        }
                    } else {
                        return {
                            ...task
                        }
                    }
                }),
                selectedTask : {
                    ...state.event.selectedTask,
                    status : payload.status
                }
              }
            }       
    case 'ASSIGN_MEMBER':
            return {
                event:{
                  ...state.event,
                  tasks : state.event.tasks.map((task) => {
                    if(task.id === payload.id){
                        return {
                            ...task,
                            taskMembers : [...task.taskMembers, payload.memberId]
                        }
                    } else {
                        return {
                            ...task
                        }
                    }
                }),
                selectedTask : {
                    ...state.event.selectedTask,
                    taskMembers : [ ...state.event.tasks.find((task) => {
                        return task.id == payload.id}).taskMembers, payload.memberId]
                }
                }
            }
    case 'SELECT_SUBTASK':
            return{
                event:{
                  ...state.event,
                  tasks : state.event.tasks,
                  selectedTask : state.event.tasks.find((task) => {
                    return task.id == payload.id})
                }
            }
    case 'REMOVE_TASK_MEMBER':
            return{
                event:{
                  ...state.event,
                  tasks : state.event.tasks.map((task) => {
                    if(task.id == payload.id){
                        return{
                            ...task,
                            taskMembers : task.taskMembers.filter((memberId) => memberId !== payload.memberId)
                        }
                    }else{
                        return{ ...task}
                    }
                }),
                selectedTask : {
                    ...state.event.selectedTask,
                    taskMembers : state.event.selectedTask.taskMembers.filter((memberId) => memberId !== payload.memberId)
                }
                }
            }
    default:
      return state;
    };
}
