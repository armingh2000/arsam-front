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
     tasks : [],
     selectedTask : undefined,
     images: [],
     creator: {
       email: '',
       phoneNumber: null
     },
     categories: [],
     status: 'idle'
  },

  //filters applied
  filter: { 
    name: null,
    dateMin: null,
    dateMax: null,
    isPravate: null,
    isProject: null,
    membersCountMin: null,
    membersCountMax: null,
    categories: null
  },
  //Array of events which is returned byd back
  filteredEvents: []
};

const event = ( state = initialState, {type, payload }) => {
  switch (type) {
    case ActionTypes.GET_EVENT_REQUEST:
      return {
        ...state,
        status: 'loading'
      };

    case ActionTypes.GET_EVENT_REQUEST_SUCCESS:
      return {
        ...state,
        event: payload.data,
        status: 'success'
      }

    case ActionTypes.GET_EVENT_REQUEST_FAILURE:
      return {
        ...state,
        status: 'error'
      };

    case ActionTypes.ADD_TASK:
            return {
                event: {
                  ...state.event,
                tasks : [...state.event.tasks, payload.task = {
                  ...payload.task
                }],
                status : 'success'
              }
            }
    case ActionTypes.REMOVE_TASK:
            return {
                event:{
                  ...state.event,
                  tasks : state.event.tasks.filter(({id}) => id !== payload.id),
                  selectedTask : undefined
                }
            }
    case ActionTypes.EDIT_TASK:
            return {
                event:{
                  ...state.event,
                  tasks : state.event.tasks.map((task) => {
                    if(task.id === payload.id){
                        return {
                            ...task,
                            name : payload.name
                        }
                    } else {
                        return {
                            ...task
                        }
                    }
                }),
                selectedTask : {
                    ...state.event.selectedTask,
                    name : payload.name
                }
                }
            }
    case ActionTypes.CHANGE_STATUS:
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
    case ActionTypes.ASSIGN_MEMBER:
            return {
                event:{
                  ...state.event,
                  tasks : state.event.tasks.map((task) => {
                    if(task.id === payload.id){
                        return {
                            ...task,
                            assignedMembers : [...task.assignedMembers, payload.memberId]
                        }
                    } else {
                        return {
                            ...task
                        }
                    }
                }),
                selectedTask : {
                    ...state.event.selectedTask,
                    assignedMembers : [ ...state.event.tasks.find((task) => {
                        return task.id == payload.id}).assignedMembers, payload.memberId]
                }
                }
            }
    case ActionTypes.SELECT_SUBTASK:
            return{
                event:{
                  ...state.event,
                  tasks : state.event.tasks,
                  selectedTask : state.event.tasks.find((task) => {
                    return task.id == payload.id})
                }
            }
    case ActionTypes.REMOVE_TASK_MEMBER:
            return{
                event:{
                  ...state.event,
                  tasks : state.event.tasks.map((task) => {
                    if(task.id == payload.id){
                        return{
                            ...task,
                            assignedMembers : task.assignedMembers.filter((memberId) => memberId !== payload.memberId)
                        }
                    }else{
                        return{ ...task}
                    }
                }),
                selectedTask : {
                    ...state.event.selectedTask,
                    assignedMembers : state.event.selectedTask.assignedMembers.filter((memberId) => memberId !== payload.memberId)
                }
                }
            }
    case ActionTypes.SET_FILTERING:
      return{
        ...state,
        filter: payload
      }

    case ActionTypes.GET_EVENTS_LIST:
      return{
        ...state,
        filteredEvents: payload
      }

    default:
      return state;
    };
}

export default event;
